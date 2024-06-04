import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(<h1>Mi wishlist</h1>);
const TodoItem = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <button onClick={() => setChecked(!checked)}>Pulsa aquí</button>
      <p>{checked ? "true" : "false"}</p>
    </>
  );
};
ReactDOM.createRoot(root).render(<TodoItem />);
