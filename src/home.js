import { useState, useEffect, React } from 'react';
import firebase from './firebase';

export function Home() {

  const [slides, setSlides] = useState([]);

    useEffect(() => {
        let mounted = true;
        firebase.firestore().collection('articulos').where('categoria','==','home').orderBy('order', 'asc').onSnapshot((snapshot)=>{
          if (mounted) {
          const slides = snapshot.docs.map((doc)=> ({
            id: doc.id,
            ...doc.data()
          }))
          setSlides(slides);
        }
        })
        return function cleanup() {
          mounted = false;
        }
        }, [])

    const listSlides = slides.map((slide)=> 
    <div key={slide.id} className='slide'>
        <div className='tituloSlide'>{slide.titulo}</div>
        <div className='subtituloSlide'>{slide.subtitulo}</div>
        <div className='contenidoSlide'>{slide.contenido}</div>
        <button>Ver más</button>
    </div>
    )
    return (
      <main>
        <h2>Home</h2>
        <section>{listSlides}</section>
      </main>
    );
  }