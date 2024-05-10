import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // pointer move
  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // limpieza
    // cuando el componente se desmonta
    // cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    // cleanup method
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // eliminar cursor
  useEffect(() => {
    if (enabled) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
  });
  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(255,0,0,0.5)",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
