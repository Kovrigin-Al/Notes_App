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
      <div className='w-[100vw] h-[100vh]'><EditForm/></div> 
      </>
       )}
    {layoutStyle === NotesStyle.card && <div>
      <EditForm/>
    </div>}
    </>
  );
};
export default EditNotePage;
