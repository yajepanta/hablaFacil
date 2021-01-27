import { ToVoto } from './toVoto.js';
import { ToMesa } from './toMesa.js'
import logoHome from './logoHome.svg'
import Contador from "./ContadorHome.js";

export function Home(props) {

  const homeBanner = props.posts.filter((post)=>post.categoria==='home'&&post.tipo==='banner');
  const homePosts = props.posts.filter((post)=>post.categoria==='home'&&post.tipo==='texto');

  const banner = homeBanner.map((slide)=> 
  <div key={slide.id}>
      <p className='tituloBanner'>{slide.titulo}</p>
  </div>
  )

    const listSlides = homePosts.map((slide)=> 
    <div className="divCardHome" key={slide.id}>
            <div className={slide.order===1 ? "cardTituloHome1" : "cardTituloHome2"}>
            <div className='imgDiv'><img src={logoHome} className="cardImgHome" alt={slide.id}/></div>
            <h4>{slide.titulo}</h4>
            </div>
            <div className="cardContentHome">
              <div className="cardTextoHome">
                <h4 className="cardTituloHome">{slide.subtitulo}</h4>
                <p className="cardContenidoHome">{slide.contenido}</p>
              </div>
              <div className="cardFooterHome">
                {slide.order===1 ? <ToVoto/> : <ToMesa/>}
                <Contador/>
              </div>
            </div>
        </div>
    )
    return (
      <main>
        <section className='bannerHome'>{banner}</section>
        <div>
          <p className='textoInfo'>Habla Fácil busca empoderar e informar a personas de una manera accesible y directa lo que necesitan saber para ejercer sus derechos y cumplir sus deberes como ciudadanos.</p>
        </div>
        <section className='textosContainerHome'><p className='titleTop'>INFO TOP DE HABLA FÁCIL</p>{listSlides}<p className='linkEnd'>Ver más sobre las elecciones</p></section>
      </main>
    );
  }