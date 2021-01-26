import React from "react";

const Contador = () => {
  const [contador, setContador] = React.useState(0);
  // estado boolean para prevenir que haya mas de un gusta por boton o usar cooking cuando esta en la misma visita de pagina 

  const aumentar = () => {
    console.log("click");
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador de Likes</h2>
      <h3>icono mano arriba: {contador}</h3>
      <h4>
        {contador > 1 ? "solo presionar una vez" : "Gracias por tu opinion"}
      </h4>
      <button onClick={() => aumentar()}>Me gusta </button>
    </div>
  );
};

export default Contador;
