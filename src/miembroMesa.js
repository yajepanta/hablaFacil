export function MiembroDeMesa(props) {

  const mesaPosts = props.posts.filter((post)=>post.categoria==='mesa');

    const listSlides = mesaPosts.map((slide)=> 
    <div key={slide.id} className='slide'>
        <div className='tituloSlide'>{slide.titulo}</div>
        <div className='subtituloSlide'>{slide.subtitulo}</div>
        <div className='contenidoSlide'>{slide.contenido}</div>
    </div>
    )
    return (
      <main>
        <h2>¿Eres miembro de mesa?</h2>
        <section>{listSlides}</section>
      </main>
    );
  }
  