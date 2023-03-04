import { ReactNode, FC, useState, createContext, useContext } from "react";
import { NotesStyle } from "../types/notes";

interface ILayoutContext {
  state: NotesStyle;
  setNotesListed: () => void;
  setNotesCarded: () => void;
}
export const LayoutContext = createContext<ILayoutContext>(
  {} as ILayoutContext
);

type IProps = { children: ReactNode };
export const LayoutProvider: FC<IProps> = ({ children }) => {
  const [cardStyle, setNotesStyle] = useState<NotesStyle>(NotesStyle.list);

  const setNotesListed = () => setNotesStyle(NotesStyle.list);
  const setNotesCarded = () => setNotesStyle(NotesStyle.card);

  return (
    <LayoutContext.Provider
      value={{ state: cardStyle, setNotesListed, setNotesCarded }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export function useLayoutContext() {
  return useContext(LayoutContext);
}
