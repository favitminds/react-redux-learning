import { useState } from "react";

import "./App.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Note from "../note/note";
import CreateArea from "../createArea/CreateArea";

interface Item {
  title: string;
  content: string;
}

const App = () => {
  const [notes, setNotes] = useState<Item[]>([]);

  const addNote = (note: Item) => {
    setNotes((prevItems: Item[]) => {
      return [...prevItems, note];
    });
  };

  const removeNote = (id: number) => {
    setNotes((prevItems: Item[]) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          content={note.content}
          title={note.title}
          removeNote={removeNote}
          id={index}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
