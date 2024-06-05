/* eslint-disable */
import NotesDeleteButton from "./NotesDeleteButton";
function Notes({ title, message, id }) {
  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{message}</p>
      <NotesDeleteButton id={id} />
    </div>
  );
}

export default Notes;
