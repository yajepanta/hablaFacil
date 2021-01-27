import './voto.css';
import { Share } from './share';
import Contador from "./Contador.js";
import printJS from 'print-js';

export function MiembroDeMesa(props) {
  const mesaBanner = props.posts.filter((post)=>post.categoria==='mesa'&&post.tipo==='banner');
  const mesaTextos = props.posts.filter((post)=>post.categoria==='mesa'&&post.tipo==='texto');
  const mesaSlides = props.posts.filter((post)=>post.categoria==='mesa'&&post.tipo==='slide');

  const banner = mesaBanner.map((slide)=> 
  <div key={slide.id}>
      <p className='tituloBanner'>{slide.titulo}</p>
  </div>
  )
    const listTextos = mesaTextos.map((slide)=> 
    <div key={slide.id} className='texto'>
        <p className='titulo'>{slide.titulo}</p>
        <p className='subtitulo'> {slide.subtitulo}</p>
        <p className='contenido'>{slide.contenido}</p>
    </div> 
    )

    const listSlides = mesaSlides.map((slide)=> 
    <div key={slide.id} className='slide'>
        <span>{slide.contenido}</span>
    </div>
    )

     return (
      <main id="mainMiembroMesa" className='mainVoto'>
        <section className='bannerMesa'>{banner}</section>
        <section className='textosContainer'>{listTextos}</section>
        <section className='slideContainer'>{listSlides}</section>
        <section className='interactionContainer'>
          <Contador />
          <Share/>
          <button onClick={ e => {
                    printJS({ printable: 'mainMiembroMesa', type: 'html', header: 'Habla Fácil' })
                }}></button>
        </section>
      </main>
    );
  }
  