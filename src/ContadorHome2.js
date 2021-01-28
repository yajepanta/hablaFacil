import React from "react";
import clapPic from './clapWhite.svg'
import clapPicSelect from './clap.svg'
import { useState, useEffect } from "react";

let status = 'notclicked';
function ImgClap () {
    if(status==='notclicked') {
        return (<img src={clapPic} alt={"like pic"} className='imgLikeHome'/>);
    } else {
        return (<img src={clapPicSelect} alt={"like pic"} className='imgLikeHome'/>);
    }
}
let enable='true';
const ContadorHome2 = () => {
  const [countHome2, setCountHome2] = useState(0);

  const increase = () => {
    if(enable==='true'){
      setCountHome2(prevCountHome2 => {
        const newCountHome2 = Number(prevCountHome2) + 1;
        localStorage.setItem("countHome2", newCountHome2);
        status = 'clicked';
        enable = 'false';
        return newCountHome2;
      });
    } else{
      setCountHome2(prevCountHome2 => {
        return prevCountHome2;
      });
    }
  };
  
  useEffect(() => {
    const initialValueHome2 = localStorage.getItem("countHome2");
    if (initialValueHome2) setCountHome2(initialValueHome2);
  }, []);

  return (
    <div className='divLikeHome'>
      <button onClick={() => increase()} className='btnLikeHome'><ImgClap/></button>
      <p className='contadorHome'>{countHome2}</p>
      {/*<Message/>
      <h4>{contador > 1 ? "solo presionar una vez" : "Gracias por tu opinion"}</h4>*/}
    </div>
  );
};

export default ContadorHome2;