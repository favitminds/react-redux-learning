import { useSelector } from 'react-redux'

import "./App.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Note from "../note/note";
import CreateArea from "../createArea/CreateArea";
import { StoreState } from "../../redux/todo/store";

const App = () => {
  const { notes } = useSelector((state: StoreState) => state)

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((note, index) => (
        <Note
          key={index}
          content={note.content}
          title={note.title}
          id={index}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
