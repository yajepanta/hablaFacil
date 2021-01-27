import './voto.css';
import { Share } from './share'
import Contador from "./Contador.js";

export function Voto(props) {
  const votoBanner = props.posts.filter(
    (post) => post.categoria === "voto" && post.tipo === "banner"
  );
  const votoTextos = props.posts.filter(
    (post) => post.categoria === "voto" && post.tipo === "texto"
  );
  const votoTextImg = props.posts.filter(
    (post) => post.categoria === "voto" && post.tipo === "textoImg"
  );
  const votoSlides = props.posts.filter(
    (post) => post.categoria === "voto" && post.tipo === "slide"
  );

  const banner = votoBanner.map((slide) => (
    <div key={slide.id}>
      <p className="tituloBanner">{slide.titulo}</p>
    </div>
  ));

  const listTextos = votoTextos.map((slide) => (
    <div key={slide.id} className="texto">
      <p className="titulo">{slide.titulo}</p>
      <p className="subtitulo"> {slide.subtitulo}</p>
      <p className="contenido">{slide.contenido}</p>
    </div>
  ));

  const textoImg = votoTextImg.map((slide) => (
    <div key={slide.id} className="texto">
      <p className="titulo">{slide.titulo}</p>
      <p className="subtitulo"> {slide.subtitulo}</p>
      <div className="divImg">
        <img
          src={slide.img}
          alt={slide.id}
          className={slide.order === 4 ? "imgVoto1" : "imgVoto2"}
        />
      </div>
      <p className="contenido">{slide.contenido}</p>
    </div>
  ));
  const listSlides = votoSlides.map((slide) => (
    <div key={slide.id} className="slide">
      <div>
        <img src={slide.img} alt={slide.id} className="imgSlide" />
      </div>
      <span>{slide.contenido}</span>
    </div>
  ));

  return (
    <main className="mainVoto">
      <section className="banner">{banner}</section>
      <section className="textosContainer">{listTextos}</section>
      <section className="textoImgContainer">{textoImg}</section>
      <section className="slideContainer">{listSlides}</section>
      <section className='interactionContainer'>
                <Contador />
                <Share/>
            </section>
      <section className="comentario">
        <div
          className="fb-comments"
          data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
          data-width="150"
          data-numposts="3"
        ></div>
      </section>
    </main>
  );
}
