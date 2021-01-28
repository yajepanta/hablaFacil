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
    status = 'clicked';
  };

  return (
    <div className='divLike'>
      <button onClick={() => aumentar()} className='btnLike'><ImgClap/></button>
      <p className='contador'>{contador}</p>
    </div>
  );
};

export default Contador;
