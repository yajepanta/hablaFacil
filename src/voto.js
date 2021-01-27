import './voto.css';
import { Share } from './share'
import Contador from "./Contador.js";
import printJS from 'print-js';
import buttonPrint from './assets/img/printer.png';

export function Voto(props) {

    const votoBanner = props.posts.filter((post)=>post.categoria==='voto'&&post.tipo==='banner');
    const votoTextos = props.posts.filter((post)=>post.categoria==='voto'&&post.tipo==='texto');
    const votoTextImg = props.posts.filter((post)=>post.categoria==='voto'&&post.tipo==='textoImg');
    const votoSlides = props.posts.filter((post)=>post.categoria==='voto'&&post.tipo==='slide');

    const banner = votoBanner.map((slide)=> 
    <div key={slide.id}>
        <p className='tituloBanner'>{slide.titulo}</p>
    </div>
    )

    const listTextos = votoTextos.map((slide)=> 
    <div key={slide.id} className='texto'>
        <p className='titulo'>{slide.titulo}</p>
        <p className='subtitulo'> {slide.subtitulo}</p>
        <p className='contenido'>{slide.contenido}</p>
    </div> 
    )

    const textoImg = votoTextImg.map((slide)=> 
    <div key={slide.id} className='texto'>
        <p className='titulo'>{slide.titulo}</p>
        <p className='subtitulo'> {slide.subtitulo}</p>
        <p className='contenido'>{slide.contenido}</p>
        <div className='divImg'><img src={slide.img} alt={slide.id} className={slide.order===4 ? 'imgVoto1' : 'imgVoto2'}/></div>
    </div> 
    )
   
    const listSlides = votoSlides.map((slide)=> 
    <div key={slide.id} className='slide'>
        <div><img src={slide.img} alt={slide.id} className='imgSlide'/></div>
        <span>{slide.contenido}</span>
    </div>
    )

    return (
        <main id="mainVoto" className='mainVoto'>
            <section className='banner'>{banner}</section>
            <section  className='textosContainer'>{listTextos}</section>
            <section className='textoImgContainer'>{textoImg}</section>
            <section className='slideContainer'>{listSlides}</section>
            <section className='interactionContainer'>
                <Contador />
                <Share/>
                <button className="button-print" onClick={ e => {
                    printJS({ printable: 'mainVoto', type: 'html', header: 'Habla Fácil' })
                }}>Imprimir <img src={buttonPrint} alt="button-print"></img></button>
            </section>
        </main>
        
    );
  }
