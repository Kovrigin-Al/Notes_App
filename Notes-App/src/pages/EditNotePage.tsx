import { useEffect, useState } from "react";
import EditForm from "../Components/EditForm";
import ListedStyleContainer from "../Components/ListedStyleContainer";
import { useLayoutContext } from "../Context/LayoutContext";
import { NotesStyle } from "../types/notes";

type Props = {};
const EditNotePage = (props: Props) => {
  const layoutStyle = useLayoutContext()?.state;

  const [isMobile, setIsMobile] = useState(
    () => document.body.clientWidth < 640
  );

  useEffect(() => {
    const changeLayout = (e: any) => {
      setIsMobile(document.body.clientWidth < 640);
    };
    window.addEventListener("resize", changeLayout, true);
    return () => window.removeEventListener("resize", changeLayout, true);
  }, []);

  return (
    <>
      {layoutStyle === NotesStyle.list && (
        <>
          {isMobile && (
          <div className=" h-screen overflow-y-scroll">
            <EditForm />
          </div>
          )}
          {!isMobile && (<div className="">
            <ListedStyleContainer />
          </div>)}
        </>
      )}
      {layoutStyle === NotesStyle.card && (
        <div className="h-screen">
          <EditForm />
        </div>
      )}
    </>
  );
};
export default EditNotePage;
