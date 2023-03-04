import NotesList from "./NotesList";

type Props = {};
const ListedStyleContainer = (props: Props) => {
  return (
    <div className="flex flex-nowrap min-h-[calc(100vh-48px)]">
      <div className="w-full sm:w-64 bg-green-300 overflow-y-scroll"><NotesList/></div>
      <div className="hidden sm:inline-block flex-grow bg-red-200">Edit Form</div>
    </div>
  );
};
export default ListedStyleContainer;
