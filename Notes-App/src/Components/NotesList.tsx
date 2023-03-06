import { NavLink, useParams } from "react-router-dom";
import { ROUTE_PARAMS } from "../App";
import { useNotesContext } from "../Context/NotesContext";
import { combineClasses } from "../utils/combineClasses";
import { timeFormatter } from "../utils/timeFormatter";

type Props = {};

const NotesList = (props: Props) => {
  const notesContex = useNotesContext();
  const createNote = notesContex.onCreateNote;

  return notesContex.notes.length === 0 ? (
    <div onClick={createNote} className="flex justify-center items-center hover:cursor-pointer h-12 bg-sky-200">Create new note</div>
  ) : (
    <div className="w-full divide-y-2 divide-slate-500/50">
      {notesContex.notes.map((note) => (
        <NavLink className={"block"} key={note.id} to={`/${note.id}`}>
          {({ isActive }) => (
            <div
              className={combineClasses(
                isActive ? "bg-sky-100" : "bg-slate-200",
                "text-left p-1 flex flex-col items-start justify-between h-12 w-full"
              )}
            >
              <div className="text-ellipsis overflow-hidden whitespace-nowrap w-full">{note.title}</div>
              <div className="text-xs text-gray-500 text-left">{timeFormatter(note.date)}</div>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};
export default NotesList;
