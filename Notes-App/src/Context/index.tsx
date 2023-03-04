import { FC, ReactNode } from "react";
import { LayoutProvider } from "./LayoutContext";

interface IProps {
  children: ReactNode;
}

export const ContextProvider: FC<IProps> = ({ children }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};
