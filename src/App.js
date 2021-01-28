import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './home.js'
import { Voto } from './voto.js'
import { MiembroDeMesa } from './miembroMesa.js'
import SearchResults from './searchResults.js'
import { useState, useEffect, React } from 'react'
import firebase from './firebase'
import "bootstrap/dist/css/bootstrap.min.css"
import { MasArticulos } from './masArticulos'
import { FooterH } from './footer.js'
import Nav from './Nav/Nav.js'

/* import "bootstrap/dist/css/bootstrap.min.css"; */

export default function App() {
  const [searchField, setSearchField] = useState('');
  //searchBar
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        let mounted = true;
        firebase.firestore().collection('articulos').orderBy('order', 'asc').onSnapshot((snapshot)=>{
          if (mounted) {
          const posts = snapshot.docs.map((doc)=> ({
            id: doc.id,
            ...doc.data()
          }))
          setPosts(posts);
        }
        })
        return function cleanup() {
          mounted = false;
        }
        }, [])

        const resultados = (componente, vista) => {
          if(searchField.length>0) {
            return <SearchResults posts={posts} setPosts={setPosts} searchField={searchField}/>
          } else if(vista===false && searchField.length===0) {
            return (
              <div>
                {componente}
              </div>
              );
          } else{
            return (
            <div>
              {componente}
              <section className='masContainer'><MasArticulos posts={posts} setPosts={setPosts}/></section>
            </div>
            );
          }
        }
  return (
    <Router>
      {Nav(searchField, setSearchField)}
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/voto">
            {resultados(<Voto posts={posts} setPosts={setPosts}/>, true)}
          </Route>
          <Route path="/miembrodemesa">
            {resultados(<MiembroDeMesa posts={posts} setPosts={setPosts}/>, true)}
          </Route>
          <Route path="/">
            {resultados(<Home posts={posts} setPosts={setPosts}/>, false)}
          </Route>
          <Route path="/quienessomos">
          </Route>
        </Switch>
      </div>
      <FooterH />
    </Router>
  );
}
