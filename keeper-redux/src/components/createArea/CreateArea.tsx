import { useState } from "react";
import { useDispatch } from "react-redux"
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

import { add } from "../../redux/todo/noteSlice";
import "./createArea.css";
import { StoreDispatch } from "../../redux/todo/store";

interface Note {
  title?: string;
  content?: string;
}

const CreateArea = () => {
  const [note, setNote] = useState<Note>({ title: "", content: "" });
  const [expanded, setExpanded] = useState<boolean>(false);
  const dispatch = useDispatch<StoreDispatch>();

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    setNote((prevNote: Note) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: any) => {
    dispatch(add(note));
    setNote({ title: "", content: "" });
  };

  const handleTitleClick = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            name="title"
            placeholder="Title"
            value={note?.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
          value={note?.content}
          onChange={handleChange}
          onClick={handleTitleClick}
        />

        <Zoom in={expanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
