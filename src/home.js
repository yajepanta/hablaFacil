import { ToVoto } from './toVoto.js';
import { ToMesa } from './toMesa.js'

export function Home(props) {

  const homePosts = props.posts.filter((post)=>post.categoria==='home');

    const listSlides = homePosts.map((slide)=> 
    <div key={slide.id} className='slide'>
        <div className='tituloSlide'>{slide.titulo}</div>
        <div className='subtituloSlide'>{slide.subtitulo}</div>
        <div className='contenidoSlide'>{slide.contenido}</div>
        {slide.order===1 ? <ToVoto/> : <ToMesa/>}
    </div>
    )
    return (
      <main>
        <h2>Home</h2>
        <section>{listSlides}</section>
      </main>
    );
  }