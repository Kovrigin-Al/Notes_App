import { FC, ReactNode } from "react";
import { combineClasses } from "../../utils/combineClasses";

type Props = {
    children: ReactNode,
    active: boolean,
    className?: string,
    onClick?: ()=>void
};
const PressableButton: FC<Props> = ({children, active, className: classNameProp, onClick}) => {
  return (
    <button
      className={combineClasses(classNameProp ? classNameProp : '',
        active
          ? "text-white bg-slate-600 border-transparent"
          : "hover:text-white hover:bg-slate-600 hover:border-transparent",
        "text-sm text-slate-600 font-semibold rounded-md  "
      )}
      onClick={onClick}
    >
        {children}
    </button>
  );
};
export default PressableButton;
