/* eslint-disable */
import { useState } from "react";
import Confetti from "react-dom-confetti";

function Temporizador() {
  const [segundos, setSegundos] = useState(null);
  const [terminado, setTerminado] = useState(false);

  function manejarEnvio(e) {
    e.preventDefault();
    const input = document.getElementById("input");
    setSegundos(parseInt(input.value));
    setTerminado(false);
    input.value = "";

    const interval = setInterval(() => {
      setSegundos((prev) => {
        if (prev > 1 && prev !== null) {
          return prev - 1;
        } else {
          clearInterval(interval);
          setTerminado(true);
          return null;
        }
      });
    }, 1000);
  }

  return (
    <div>
      <form action="" onSubmit={manejarEnvio}>
        <input type="number" id="input" /> <br />
        <button type="submit">Empezar</button>
        <h1>Temporizador</h1>
        <h2>{!terminado ? segundos : "BOOM 💣"}</h2>
        <Confetti active={terminado} />
      </form>
    </div>
  );
}

export default Temporizador;

// EJEMPLO PARA APRENDER A USAR useEffect
// import React, { useState, useEffect } from 'react';

// function Temporizador() {
//   const [segundos, setSegundos] = useState(5);

//   useEffect(() => {
//     if (segundos > 0) {
//       const interval = setInterval(() => {
//         setSegundos(segundos - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [segundos]);

//   return (
//     <div>
//       <h1>Temporizador</h1>
//       <h2>{segundos > 0 ? segundos : "¡Tiempo agotado!"}</h2>
//     </div>
//   );
// }

// export default Temporizador;
