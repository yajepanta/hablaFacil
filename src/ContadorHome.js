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
const ContadorHome = () => {
  const [countHome, setCountHome] = useState(0);

  const increase = () => {
    if(enable==='true'){
      setCountHome(prevCountHome => {
        const newCountHome = Number(prevCountHome) + 1;
        localStorage.setItem("countHome", newCountHome);
        status = 'clicked';
        enable = 'false';
        return newCountHome;
      });
    } else{
      setCountHome(prevCountHome => {
        return prevCountHome;
      });
    }
  };
  
  useEffect(() => {
    const initialValueHome = localStorage.getItem("countHome");
    if (initialValueHome) setCountHome(initialValueHome);
  }, []);

  return (
    <div className='divLikeHome'>
      <button onClick={() => increase()} className='btnLikeHome'><ImgClap/></button>
      <p className='contadorHome'>{countHome}</p>
      {/*<Message/>
      <h4>{contador > 1 ? "solo presionar una vez" : "Gracias por tu opinion"}</h4>*/}
    </div>
  );
};

export default ContadorHome;