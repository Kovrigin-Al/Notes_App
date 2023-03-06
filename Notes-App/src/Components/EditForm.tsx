import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ROUTE_PARAMS } from "../App";
import { useEditFormContext } from "../Context/EditFormContext";
import { useNotesContext } from "../Context/NotesContext";
import useDebounceCallback from "../hooks/useDebounceCallback";

type Props = {};
const EditForm = (props: Props) => {
  const notesContext = useNotesContext();
  const { id } = useParams<ROUTE_PARAMS>();

  const [inputValue, setInputValue] = useState(() =>
    id ? notesContext.getNoteById(id).body : ""
  );

  const debouncedNoteChange = useDebounceCallback(
    notesContext.onChangeNote,
    500
  );
  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setInputValue(e.target.innerHTML);
    debouncedNoteChange(
      id,
      e.target.innerHTML,
      e.target.outerText.replaceAll("\n", " ")
    );
  };

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current!.innerHTML = inputValue;
  }, []);


  // const [isTextSelected, setIsTextSelected] = useState(false);
  const {setIsTextSelected} = useEditFormContext()
  
  useEffect(() => {
    const isTextInBlock = (textNode: Node) => ref.current?.contains(textNode);
    const isTextSelected = () => {
      const selectedText = window.getSelection();
      return !!selectedText?.toString();
    };

    const checkIfTextInBlockSelected = () => {
      if (isTextSelected()) {
        const isInBlock = isTextInBlock(window.getSelection()!.anchorNode!);
        setIsTextSelected(!!isInBlock);
        return
      }
      setIsTextSelected(false);
    };

    document.addEventListener("mouseup", checkIfTextInBlockSelected);
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("mouseup", checkIfTextInBlockSelected);
    };
  }, []);

  const handleMouseUp = () => {
    const selectedText = window.getSelection();
    setIsTextSelected(!!selectedText?.toString());
  };

  return (
    <>
      <div className="h-full max-h-[calc(100vh-48px)] w-full overflow-y-scroll">
          <div
            ref={ref}
            id="editForm"
            className="h-full outline-none p-2 w-full"
            contentEditable={!!id}
            onInput={handleChange}
            onMouseUp={handleMouseUp}
            onClick={(e) => {}}
          ></div>
      </div>
    </>
  );
};
export default EditForm;
