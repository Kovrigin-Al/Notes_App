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
    <div className="bg-white h-full p-5 w-full overflow-y-scroll gridBox">
      {notes.map((note,index)=>
      <Link key={index} to={String(note.id)}>
      <NoteCard note={note}></NoteCard>
      </Link>
      )}
      <div onClick={createNote} className='cursor-pointer'>
      <NoteCard></NoteCard>
      </div>
    </div>
  );
};
export default CardedStyleContainer;