import EditForm from "../Components/EditForm";
import ListedStyleContainer from "../Components/ListedStyleContainer";
import { useLayoutContext } from "../Context/LayoutContext";
import { NotesStyle } from "../types/notes";

type Props = {};
const EditNotePage = (props: Props) => {
  const layoutStyle = useLayoutContext()?.state;

  return (
    <>
      {layoutStyle === NotesStyle.list && (
      <>
      <div className="hidden sm:block"><ListedStyleContainer /></div>
      </>
       )}
    {layoutStyle === NotesStyle.card && <div className="h-screen">
      <EditForm/>
    </div>}
    </>
  );
};
export default EditNotePage;
