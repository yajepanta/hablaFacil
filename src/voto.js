export function Voto(props) {

    const votoPosts = props.posts.filter((post)=>post.categoria==='voto');
   
    const listSlides = votoPosts.map((slide)=> 
    <div key={slide.id} className='slide'>
        <div className='tituloSlide'>{slide.titulo}</div>
        <div className='subtituloSlide'>{slide.subtitulo}</div>
        <div className='contenidoSlide'>{slide.contenido}</div>
    </div>
    )

    return (
        <main>
            <h2>Voto responsable 2021</h2>
            <section>{listSlides}</section>
        </main>
        
    );
  }
