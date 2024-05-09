import { WINNER_COMBOS } from "./../constants.js";

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay ganador
  return null;
};
export const checkEndGame = (boardToCheck) => {
  // si hay un empate
  // si todos los cuadros estan llenos
  return boardToCheck.every((square) => square !== null);
};
