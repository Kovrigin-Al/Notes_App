import { useState } from "react";
import { useParams } from "react-router-dom";
import { ROUTE_PARAMS } from "../App";
import { useNotesContext } from "../Context/NotesContext";
import useDebounceCallback from "../hooks/useDebounceCallback";

type Props = {};
const EditForm = (props: Props) => {
  const notesContext = useNotesContext();
  const { id } = useParams<ROUTE_PARAMS>();
  const [inputValue, setInputValue] = useState(
    () => id ? notesContext.getNoteById(id).body : ''
  );
  const debouncedNoteChange = useDebounceCallback(
    notesContext.onChangeNote,
    500
  );
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    debouncedNoteChange(id, e.target.value);
  };

  return (
    <textarea
      spellCheck={true}
      className="h-full resize-none border-none outline-none p-2 w-full"
      onChange={handleChange}
      value={inputValue}
    ></textarea>
  );
};
export default EditForm;
