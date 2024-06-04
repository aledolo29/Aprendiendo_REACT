import { useState, useEffect } from "react";

function CountDown() {
  // Seconds to count , seconds left
  const [seconds, setSeconds] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(
    function () {
      console.log("useEffect");

      if (seconds === null) return;

      // seconds tiene un valor
      setElapsedSeconds(0);
      let interval = setInterval(() => {
        setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    },
    [seconds]
  );
  function parseForm(e) {
    e.preventDefault();
    let userSeconds = document.getElementById("seconds").value; //e.target.seconds.value --> Es otra forma de obtener el valor del input
    const s = parseInt(userSeconds);
    setSeconds(s);
  }

  if (elapsedSeconds >= seconds && seconds !== null) {
    return (
      <div>
        <p>El tiempo ha finalizado</p>
        <button
          onClick={() => {
            setSeconds(null);
            setElapsedSeconds(0);
          }}
        >
          Reiniciar
        </button>
      </div>
    );
  }

  if (seconds !== null) {
    return <p>Quedan {seconds - elapsedSeconds} segundos</p>;
  }
  return (
    <div>
      <p>Cuántos segundos quieres contar?</p>
      <form action="#" onSubmit={(e) => parseForm(e)}>
        <input type="number" name="seconds" id="seconds" />
        <button>Iniciar</button>
      </form>
    </div>
  );
}
export default CountDown;
