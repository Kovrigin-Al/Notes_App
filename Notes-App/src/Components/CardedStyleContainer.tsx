import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../App";
import { useNotesContext } from "../Context/NotesContext";
import NoteCard from "./NoteCard";


type Props = {};
const CardedStyleContainer: FC = (props: Props) => {

  const notesContex = useNotesContext()
  const notes = notesContex.notes

  const createNote = notesContex.onCreateNote

  return (
    <div className="bg-green-500 h-full p-5 w-full overflow-y-scroll gridBox">
      {notes.length === 0 && <div onClick={createNote}>
      <NoteCard />
      </div>}
      {notes.map((note,index)=>
      <Link key={index} to={String(note.id)}>
      <NoteCard />
      </Link>
      )}
   
    </div>
  );
};
export default CardedStyleContainer;