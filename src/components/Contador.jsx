import React, { useState } from "react";

const Contador = (props) => {
  console.log(props);
  //   // SUMA JAVASCRIPT
  //   const contador = 0;

  //   const suma = () => {
  //     contador++;
  //     // contador = contador + 1;
  //   };
  // --------------------------------------------

  //? HOOKS - useState --------------------------
  //const [cuenta, setCuenta] = useState(0);
  const [cuenta, setCuenta] = useState(props.inicialState);

  //Funcion
  const contadorMas = () => {
    setCuenta(cuenta + 1);
  };
  //? --------------------------------------------

  return (
    <>
      <div>
        <h1>Contador</h1>
        <h3>{cuenta}</h3>
        <button onClick={contadorMas}>+</button>
        <button onClick={() => setCuenta(props.inicialState)}>Reset</button>
        <button onClick={() => setCuenta(cuenta - 1)}>-</button>
      </div>
    </>
  );
};

export default Contador;
