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

type Props = {};
const TopBar = (props: Props) => {
  const layoutContext = useLayoutContext();
  const notesContex = useNotesContext();
  const location = useLocation();
  const { id } = useParams<ROUTE_PARAMS>();
  const navigate = useNavigate();

  //check of current note is emty to crevent creating new note
  let isNoteEmpty = false;
  if (id) {
    isNoteEmpty = !!!notesContex.getNoteById(id).body.length;
  }

  const handleDeleteNote = () => {
    notesContex.onDeleteNote(id!);
    navigate(ROUTE_PATH.MAIN);
  };

  const handleGoBack = () => {
    if (isNoteEmpty) {
      handleDeleteNote();
    } else {
      navigate("..");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-slate-200 h-12 flex items-center md:justify-between">
        <div className="flex items-center flex-nowrap">
          <Link to="/">
            <PressableButton
              active={layoutContext.state === NotesStyle.list}
              className="mx-2"
              onClick={layoutContext.setNotesListed}
            >
              <ListBulletIcon className="h-5 w-5" />
            </PressableButton>
            <PressableButton
              active={layoutContext.state === NotesStyle.card}
              className="mx-2"
              onClick={layoutContext.setNotesCarded}
            >
              <Squares2X2Icon className="h-5 w-5" />
            </PressableButton>
          </Link>
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
        </div>
        <div className="flex items-center flex-nowrap">
          <PressableButton
            active={false}
            onClick={notesContex.onCreateNote}
            className={isNoteEmpty ? "pointer-events-none text-slate-400" : ""}
          >
            <PencilSquareIcon className="w-5 h-5" />
          </PressableButton>
          <PressableButton
            active={!!id}
            onClick={handleDeleteNote}
            className={!id ? "pointer-events-none text-slate-400" : ""}
          >
            <TrashIcon className="w-5 h-5" />
          </PressableButton>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default TopBar;
