import CardedStyleContainer from "../Components/CardedStyleContainer";
import ListedStyleContainer from "../Components/ListedStyleContainer";
import NoteCard from "../Components/NoteCard";
import NotesList from "../Components/NotesList";
import { useLayoutContext } from "../Context/LayoutContext";
import { NotesStyle } from "../types/notesStyleTypes";

type Props = {};
const PreviewNotesPage = (props: Props) => {
  const layoutStyle = useLayoutContext()?.state;

  return (
    <>
      {layoutStyle === NotesStyle.card && <CardedStyleContainer />}
      {layoutStyle === NotesStyle.list && <ListedStyleContainer />}
    </>
  );
};
export default PreviewNotesPage;
