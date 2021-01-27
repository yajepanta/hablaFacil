import React from "react";
import clapPic from './clapWhite.svg'
import clapPicSelect from './clap.svg'

let status = 'notclicked';
function ImgClap () {
    if(status==='notclicked') {
        return (<img src={clapPic} alt={"like pic"} className='imgLikeHome'/>);
    } else {
        return (<img src={clapPicSelect} alt={"like pic"} className='imgLikeHome'/>);
    }
}

const Contador = () => {
  const [contador, setContador] = React.useState(0);
  // estado boolean para prevenir que haya mas de un gusta por boton o usar cooking cuando esta en la misma visita de pagina 
  const [ disabled, setDisabled ] = React.useState("");

  const aumentar = () => {
    /* debe recibir como arg el id del post */
    setContador(contador + 1);
<<<<<<< HEAD
    localStorage.setItem(contador, 'voted');
    console.log(localStorage.getItem(contador));
    
    if(localStorage.getItem(contador)){
      setDisabled("disabled")
    }
=======
    status = 'clicked';
>>>>>>> 341b0b3484441205fda1b68fa9bcf192d09c34ae
  };

  return (
    <div className='divLike'>
      <button onClick={() => aumentar()} className='btnLike'><ImgClap/></button>
      <p className='contador'>{contador}</p>
    </div>
  );
};

export default Contador;
