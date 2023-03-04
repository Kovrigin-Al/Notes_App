import { useParams } from "react-router-dom";
import { ROUTE_PARAMS } from "../App";

type Props = {};

const notes = Array(10).fill('');

const NotesList = (props: Props) => {

  const {id} = useParams<ROUTE_PARAMS>()
    
  return (
    <div className="w-full divide-y-2 text-center ">
      {notes.map((note, index) => (
        <div key={index}>{'I am a note text preview'}</div>
      ))}
    </div>
  );
};
export default NotesList;
