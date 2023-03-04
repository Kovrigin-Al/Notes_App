import { FC } from "react";
import CardedStyleContainer from "../Components/CardedStyleContainer";
import ListedStyleContainer from "../Components/ListedStyleContainer";
import NoteCard from "../Components/NoteCard";
import NotesList from "../Components/NotesList";
import { useLayoutContext } from "../Context/LayoutContext";
import { useNotesContext } from "../Context/NotesContext";
import { INote, NotesStyle } from "../types/notes";

type Props = {
};
const PreviewNotesPage: FC<Props> = ({}) => {
  const layoutStyle = useLayoutContext()?.state;

  return (
    <>
      {layoutStyle === NotesStyle.card && <CardedStyleContainer />}
      {layoutStyle === NotesStyle.list && <ListedStyleContainer />}
    </>
  );
};
export default PreviewNotesPage;
