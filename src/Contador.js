import React from "react";
import clapPic from './clap.svg'
/*
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { useState, useRef} from 'react';


function Message() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">Popover bottom</Popover.Title>
          <Popover.Content>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}
*/
const Contador = () => {
  const [contador, setContador] = React.useState(0);
  // estado boolean para prevenir que haya mas de un gusta por boton o usar cooking cuando esta en la misma visita de pagina 
  const [ disabled, setDisabled ] = React.useState("");

  const aumentar = () => {
    /* debe recibir como arg el id del post */
    setContador(contador + 1);
    localStorage.setItem(contador, 'voted');
    console.log(localStorage.getItem(contador));
    
    if(localStorage.getItem(contador)){
      setDisabled("disabled")
    }
  };

  return (
    <div className='divLike'>
      <button disabled={disabled} onClick={() => aumentar()} className='btnLike' type="button" ><img src={clapPic} alt={"like pic"} className='imgLike'/></button>
      <p className='contador'>{contador}</p>
    </div>
  );
};

export default Contador;
