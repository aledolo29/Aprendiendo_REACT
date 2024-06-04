import { useState } from "react";
function Counter() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Has hecho clic {contador} veces a este botón</p>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
export default Counter;
