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
  const aumentar = () => {
    console.log("click");
    setContador(contador + 1);
    status = 'clicked';
  };

  return (
    <div className='divLikeHome'>
      <button onClick={() => aumentar()} className='btnLikeHome'><ImgClap/></button>
      <p className='contadorHome'>{contador}</p>
      {/*<Message/>
      <h4>{contador > 1 ? "solo presionar una vez" : "Gracias por tu opinion"}</h4>*/}
    </div>
  );
};

export default Contador;