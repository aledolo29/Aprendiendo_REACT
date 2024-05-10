import { useState } from "react";
import { Square } from "./components/Square";
import "./App.css";

function App() {
  //tablero
  const [board, setBoard] = useState(Array(16).fill(null));

  // turnos de los jugadores
  const TURNS = {
    X: "🔴",
    O: "🟡",
  };

  const [turn, setTurn] = useState(TURNS.X);

  // actualizar el tablero
  // actualizar el tablero
  const updatedBoard = (index) => {
    // no actualizamos el tablero si ya tiene algo
    if (board[index]) {
      return;
    }

    // actualizar el tablero
    const newBoard = [...board];

    newBoard[index] = turn;
    setBoard(newBoard);

    // cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };
  // const updatedBoard

  return (
    <main className="board">
      <h1>Conecta 4</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updatedBoard={updatedBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
