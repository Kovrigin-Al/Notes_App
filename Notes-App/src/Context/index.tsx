import { FC, ReactNode } from "react";
import { EditFormProvider } from "./EditFormContext";
import { LayoutProvider } from "./LayoutContext";
import { NotesProvider } from "./NotesContext";

interface IProps {
  children: ReactNode;
}

export const ContextProvider: FC<IProps> = ({ children }) => {
  return <NotesProvider><LayoutProvider><EditFormProvider>{children}</EditFormProvider></LayoutProvider></NotesProvider>;
};
