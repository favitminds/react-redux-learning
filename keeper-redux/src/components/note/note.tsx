import "./note.css";

interface IProps {
  id: number;
  title: string;
  content: string;
  removeNote: any;
}

const Note = ({ title, content, removeNote, id }: IProps) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => removeNote(id)}>DELETE</button>
    </div>
  );
};

export default Note;
