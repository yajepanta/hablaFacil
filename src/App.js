import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './home.js'
import { Voto } from './voto.js'
import { MiembroDeMesa } from './miembroMesa.js'
import { SearchResults } from './searchResults.js'
import { useState, useEffect, React } from 'react';
import firebase from './firebase';
import { SearchBox } from './searchBox';
import Contador from "./Contador.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { MasArticulos } from './masArticulos'

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

        const resultados = (componente) => {
          if(searchField.length>0) {
            return <SearchResults posts={posts} setPosts={setPosts} searchField={searchField}/>
          } else {
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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/voto">Voto responsable</Link>
            </li>
            <li>
              <Link to="/miembrodemesa">Miembro de mesa</Link>
            </li>
          </ul>
          {SearchBox(setSearchField, searchField)}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/voto">
            {resultados(<Voto posts={posts} setPosts={setPosts}/>)}
          </Route>
          <Route path="/miembrodemesa">
            {resultados(<MiembroDeMesa posts={posts} setPosts={setPosts}/>)}
          </Route>
          <Route path="/">
            {resultados(<Home posts={posts} setPosts={setPosts}/>)}
          </Route>
        </Switch>
        <Contador />
      </div>
    </Router>
  );
}
