/* eslint-disable */
import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Notes from "./Notes";

function NotesList() {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      <p>Tienes {notes.length} notas guardadas</p>
      {notes.map((note) => (
        <Notes key={note.id} id={note.id} title={note.title} message={note.message} />
      ))}
    </div>
  );
}

export default NotesList;
