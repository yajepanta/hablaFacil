export function SearchResults(props) {
  const allPosts = props.posts;
    return (
      <main>
        <h2>Resultados</h2>
        <section>{
        // eslint-disable-next-line array-callback-return
        allPosts.filter((post)=>{
          if(props.searchField===''){
            return post
          } else if(post.contenido.toLowerCase().includes(props.searchField.toLowerCase())) {
            return post
          }
        }).map((slide)=> 
        <div key={slide.id} className='slide'>
            <div className='tituloSlide'>{slide.titulo}</div>
            <div className='subtituloSlide'>{slide.subtitulo}</div>
            <div className='contenidoSlide'>{slide.contenido}</div>
        </div>
        )
        }</section>
      </main>
    );
  }