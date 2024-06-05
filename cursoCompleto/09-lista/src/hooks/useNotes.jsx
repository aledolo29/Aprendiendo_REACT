/* eslint-disable */
import { useEffect } from "react";
import { useState } from "react";
const list = [
  {
    id: "1",
    title: "Primera nota",
    message: "Hola mundo",
  },
  {
    id: "2",
    title: "Segunda nota",
    message: "Me ha dicho un pajarito",
  },
];
const LOCALSTORAGE_KEY = "MIAPP.list";
function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGE_KEY)) {
      setNotes(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    }
  }, []);

  useEffect(() => {
    if (notes.length === 0) {
      return;
    }
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  function add(title, message) {
    const id = Date.now();
    const noteObject = { id, title, message };
    setNotes([noteObject, ...notes]);
  }

  function remove(id) {
    let newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return { notes, add, remove };
}

export default useNotes;
