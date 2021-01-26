import { useState, useEffect, React } from 'react';
import firebase from './firebase';

export function MiembroDeMesa() {

  const [slides, setSlides] = useState([]);
    useEffect(() => {
        let mounted = true;
        firebase.firestore().collection('articulos').where('categoria','==','mesa').orderBy('order', 'asc').onSnapshot((snapshot)=>{
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
    </div>
    )
    return (
      <main>
        <h2>¿Eres miembro de mesa?</h2>
        <section>{listSlides}</section>
      </main>
    );
  }
  