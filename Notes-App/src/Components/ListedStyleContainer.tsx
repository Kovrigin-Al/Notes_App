import { useParams } from "react-router-dom";
import { ROUTE_PARAMS } from "../App";
import EditForm from "./EditForm";
import NotesList from "./NotesList";

type Props = {};
const ListedStyleContainer = (props: Props) => {

  const {id} = useParams<ROUTE_PARAMS>()

  return (
    <div className="flex flex-nowrap min-h-[calc(100vh-48px)] relative">
      <div className="w-full sm:w-64 max-h-[calc(100vh-48px)] bg-white border-r-2 overflow-y-scroll"><NotesList/></div>
      <div className="hidden sm:inline-block flex-grow bg-white pb-2 overflow-y-scroll"><EditForm key={id}/></div>
    </div>
  );
};
export default ListedStyleContainer;
