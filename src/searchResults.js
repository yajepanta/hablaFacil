import './searchResult.css';

export function SearchResults(props) {
  const allPostsSearch = props.posts.filter((post)=>post.categoria==='buscar');
    return (
      <main className="mainResults">
        <p className="textResults">Resultados de "{props.searchField}"</p>
        <section>{
        // eslint-disable-next-line array-callback-return
        allPostsSearch.filter((post)=>{
          if(props.searchField===''){
            return post
          } else if(post.contenido.toLowerCase().includes(props.searchField.toLowerCase())) {
            return post
          }
        }).map((slide)=> 
        <div className="divCard" key={slide.id}>
            <img src={slide.img} className="cardImg" alt={slide.id}/>
            <div className="cardContent">
              <div className="cardTexto">
                <h4 className="cardTitulo">{slide.titulo}</h4>
                <p className="cardContenido">{slide.contenido}</p>
              </div>
              <div className="cardFooter">
                <p>{slide.fecha}</p>
              </div>
            </div>
        </div>
        )
        }</section>
      </main>
    );
  }