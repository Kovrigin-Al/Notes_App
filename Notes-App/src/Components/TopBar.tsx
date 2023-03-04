import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import PressableButton from "./ui/PressableButton";
import { NotesStyle } from "../types/notesStyleTypes";
import { useLayoutContext } from "../Context/LayoutContext";
import { Link } from "react-router-dom";

type Props = {};
const TopBar = (props: Props) => {
  const context = useLayoutContext();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-200 h-12 flex items-center">
      <Link to='/'>
      <PressableButton active={context?.state === NotesStyle.list} className='mx-2' onClick={context?.setNotesListed} >
        <ListBulletIcon className="h-5 w-5" />
      </PressableButton>
      <PressableButton active={context?.state === NotesStyle.card} className='mx-2' onClick={context?.setNotesCarded} >
        <Squares2X2Icon className="h-5 w-5" />
      </PressableButton>
      </Link>
    
    </nav>
  );
};
export default TopBar;
