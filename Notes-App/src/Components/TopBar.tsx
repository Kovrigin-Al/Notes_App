import {
  ChevronLeftIcon,
  ListBulletIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import PressableButton from "./ui/PressableButton";
import { NotesStyle } from "../types/notes";
import { useLayoutContext } from "../Context/LayoutContext";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { ROUTE_PARAMS, ROUTE_PATH } from "../App";
import { useNotesContext } from "../Context/NotesContext";
import ConfirmationModal from "./ui/ConfirmationModal";
import { useEditFormContext } from "../Context/EditFormContext";
import { combineClasses } from "../utils/combineClasses";
import SearchBar from "./ui/SearchBar";

type Props = {};
const TopBar = (props: Props) => {
  const layoutContext = useLayoutContext();
  const notesContex = useNotesContext();
  const location = useLocation();
  const { id } = useParams<ROUTE_PARAMS>();
  const navigate = useNavigate();
  const { isTextSelected } = useEditFormContext();

  //check of current note is emty to crevent creating new note
  let isNoteEmpty = false;
  if (id) {
    isNoteEmpty = !!!notesContex.getNoteById(id).body;
  }

  const handleDeleteNote = () => {
    notesContex.onDeleteNote(id!);
    navigate(ROUTE_PATH.MAIN);
  };

  const handleGoBack = () => {
    if (isNoteEmpty) {
      handleDeleteNote();
    }
    navigate("..");
    
  };

  const handleChangeStyle = (arg: string) => {
    document.execCommand(arg);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-slate-200 flex justify-between h-12 items-center md:justify-between border-b-2 border-slate-500/50">
        <div className="flex items-center flex-nowrap">
          <Link className="flex items-center" to="/">
            {/* List style button */}
            <PressableButton
              active={layoutContext.state === NotesStyle.list}
              className="mx-2"
              onClick={layoutContext.setNotesListed}
            >
              <ListBulletIcon className="h-5 w-5" />
            </PressableButton>

            {/* Carded style button */}
            <PressableButton
              active={layoutContext.state === NotesStyle.card}
              className="mx-2"
              onClick={layoutContext.setNotesCarded}
            >
              <Squares2X2Icon className="h-5 w-5" />
            </PressableButton>
          </Link>

          {/* Go back button */}
          <PressableButton
            active={false}
            onClick={handleGoBack}
            className={
              location.pathname.substring(1) === ROUTE_PATH.MAIN
                ? "pointer-events-none text-slate-400"
                : ""
            }
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </PressableButton>

          {/* Create new note button */}
          <PressableButton
            active={false}
            onClick={notesContex.onCreateNote}
            className={isNoteEmpty ? "pointer-events-none text-slate-400" : ""}
          >
            <PencilSquareIcon className="w-5 h-5" />
          </PressableButton>

          {/* delete button */}
          <PressableButton
            active={false}
            className={!id ? "pointer-events-none text-slate-400" : ""}
          >
            <ConfirmationModal callback={handleDeleteNote}>
              <TrashIcon className="w-5 h-5" />
            </ConfirmationModal>
          </PressableButton>
        </div>

        <SearchBar />

        {/* formating text buttons */}
        <div
          className={combineClasses(
            isTextSelected
              ? "bg-slate-400"
              : "pointer-events-none text-slate-400 bg-slate-200",
            "mr-5 rounded-md  p-1 w-20 flex justify-around"
          )}
        >
          <PressableButton
            active={false}
            onClick={() => handleChangeStyle("bold")}
          >
            <i className="block w-5 h-5">b</i>
          </PressableButton>
          <PressableButton
            active={false}
            onClick={() => handleChangeStyle("italic")}
          >
            <i className="block w-5 h-5">i</i>
          </PressableButton>
          <PressableButton
            active={false}
            onClick={() => handleChangeStyle("underline")}
          >
            <i className="block w-5 h-5">u</i>
          </PressableButton>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default TopBar;
