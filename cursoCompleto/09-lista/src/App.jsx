import "./App.css";
import NotesForm from "./notes/NotesForm";
import NotesList from "./notes/NotesList";
import { NotesProvider } from "./contexts/NotesContext";
function App() {
  return (
    <div className="App">
      <NotesProvider>
        <h1>Formulario</h1>
        <NotesForm />
        <h1>Notas</h1>
        <NotesList />
      </NotesProvider>
    </div>
  );
}

export default App;
