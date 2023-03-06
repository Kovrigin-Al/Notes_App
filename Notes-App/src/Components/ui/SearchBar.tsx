import React, { FC, useEffect, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import useDebounceCallback from "../../hooks/useDebounceCallback";
import { useNotesContext } from "../../Context/NotesContext";
type Props = {
};

const SearchBar: FC<Props> = ({ }) => {
 
  const [value, setValue] = useState('');
  const {findNotes} = useNotesContext()
  const debouncedFilterNotes = useDebounceCallback((value)=>findNotes(value), 800);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedFilterNotes(e.target.value)
  };

  const handleClearSearch = () => {
    setValue('')
    findNotes('')
  }

  return (
    <div className="relative mx-5 flex items-center text-gray-400 focus-within:text-gray-600 w-full max-w-md">
      <MagnifyingGlassIcon className="w-4 h-4 absolute ml-3 pointer-events-none" />
      <input
        type="text"
        id="search"
        className="py-1 w-full pl-10 max-w-md h-auto rounded-full border-none ring-1 focus:ring-1  ring-slate-200/10 shadow-sm pr-3 hover:ring-slate-300"
        placeholder="Search notes..."
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
      {value && <XMarkIcon className="h-6 w-6 p-1 absolute right-2 hover:text-slate-600 cursor-pointer rounded-full  hover:bg-slate-200" onClick={handleClearSearch}/>}
    </div>
  );
};

export default SearchBar;
