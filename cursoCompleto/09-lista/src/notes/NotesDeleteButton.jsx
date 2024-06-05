/* eslint-disable */
import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

function NoteDeleteButton({ id }) {
  let { remove } = useContext(NotesContext);

  return <button onClick={(ev) => remove(id)}>Eliminar</button>;
}
export default NoteDeleteButton;
