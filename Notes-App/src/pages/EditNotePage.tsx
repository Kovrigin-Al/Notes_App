import { useLayoutContext } from "../Context/LayoutContext";
import { NotesStyle } from "../types/notesStyleTypes";

type Props = {};
const EditNotePage = (props: Props) => {
  const layoutStyle = useLayoutContext()?.state;

  return (
    <>
      {layoutStyle === NotesStyle.list && <></>}
    <div>
      <h1>EditNotePage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto possimus
        eius sint quia est officiis veniam consequatur ratione reiciendis
        asperiores. Consectetur sit incidunt fuga dolorum vitae illum assumenda
        deleniti optio?
      </p>
    </div>
    </>
  );
};
export default EditNotePage;
