import { FC } from "react";
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";

const notes = Array(10).fill('');

type Props = {};
const CardedStyleContainer: FC = (props: Props) => {
  return (
    <div className="bg-green-500 h-full p-5 w-full overflow-y-scroll gridBox">
      {notes.map((note,index)=>
      <Link key={index} to={String(index)}>
      <NoteCard />
      </Link>
      )}
   
    </div>
  );
};
export default CardedStyleContainer;