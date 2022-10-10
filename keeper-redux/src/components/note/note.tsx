import "./note.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { StoreDispatch } from "../../redux/todo/store";
import { remove } from "../../redux/todo/noteSlice";


interface IProps {
  id: number;
  title?: string;
  content?: string;
}

const Note = ({ title, content, id }: IProps) => {
  const dispatch = useDispatch<StoreDispatch>();

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => dispatch(remove(id))}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
