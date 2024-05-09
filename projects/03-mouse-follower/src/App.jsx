import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log("handleMove", { clientX, clientY });
    };
    window.addEventListener("pointermove", handleMove);
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: "translate(0px, 0px)",
        }}
      ></div>
      <button
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
