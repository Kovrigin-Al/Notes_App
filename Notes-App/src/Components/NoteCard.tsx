import { PlusIcon } from "@heroicons/react/24/outline";
import { FC, ReactNode } from "react";
import { INote } from "../types/notes";
import { timeFormatter } from "../utils/timeFormatter";

type Props = { note?: INote };
const NoteCard: FC<Props> = ({ note }) => {
  if (note) {
    return (
      <>
        <div className="w-48 h-28 text-xs text-ellipsis overflow-hidden bg-slate-100 p-2 rounded border-slate-200 border-1">
          {note.title}
        </div>
        <div className="w-full text-sm text-center">
          {timeFormatter(note.date)}
        </div>
      </>
    );
  }

  return (
    <>
        <div className="w-48 h-28 text-slate-600 flex justify-center items-center bg-slate-100 p-2 rounded border-2 border-dashed  border-slate-600">
          <PlusIcon  className="h-20 w-20"/>

        </div>
        <div className="w-full text-sm text-center">
          {timeFormatter(Date.now())}
        </div>
      </>
  )
};
export default NoteCard;
