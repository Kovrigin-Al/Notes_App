import { NavLink, useParams } from "react-router-dom";
import { ROUTE_PARAMS } from "../App";
import { useNotesContext } from "../Context/NotesContext";
import { combineClasses } from "../utils/combineClasses";

type Props = {};

const NotesList = (props: Props) => {

  const notesContex = useNotesContext();
  const createNote = notesContex.onCreateNote

  return notesContex.notes.length === 0 ? (
    <div onClick={createNote}>Create new note</div>
  ) : (
    <div className="w-full divide-y-2 text-center ">
      {notesContex.notes.map((note) => (
        <NavLink key={note.id} to={`/${note.id}`} >
          {({ isActive }) => (<div className={combineClasses(isActive ? 'bg-red-400':'bg-sky-200' ," h-10 w-full")}>{note.body}</div>)}
        </NavLink>
      ))}
    </div>
  );
};
export default NotesList;
