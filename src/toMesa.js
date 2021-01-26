import { useHistory } from "react-router-dom";


export function ToMesa() {

    let history = useHistory();
  
    function handleClickToMesa() {
      history.push("/miembrodemesa");
    }
  
    return (
      <button type="submit" onClick={handleClickToMesa}>
        Ver más
      </button>
    );
  }