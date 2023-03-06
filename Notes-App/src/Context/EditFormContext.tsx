import {
  ReactNode,
  FC,
  useState,
  createContext,
  useContext
} from "react";

interface IEditFormContext {
  isTextSelected: boolean;
  setIsTextSelected: (arg: boolean) => void;
}
export const EditFormContext = createContext<IEditFormContext>(
  {} as IEditFormContext
);

type IProps = { children: ReactNode };
export const EditFormProvider: FC<IProps> = ({ children }) => {

  const [isTextSelected, setIsTextSelected] = useState(false);

  return (
    <EditFormContext.Provider value={{ isTextSelected, setIsTextSelected }}>
      {children}
    </EditFormContext.Provider>
  );
};

export function useEditFormContext() {
  return useContext(EditFormContext);
}
