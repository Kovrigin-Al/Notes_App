import { createContext, ReactNode, FC, useState, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { INote } from "../types/notes";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";

interface INotesContext {
  notes: INote[];
  onCreateNote: () => void;
  onDeleteNote: (id: string) => void;
  getNoteById: (id: string) => INote;
  onChangeNote: (id: string, body: string, title: string) => void;
}

export const NotesContex = createContext<INotesContext>({} as INotesContext);

type IProps = { children: ReactNode };
export const NotesProvider: FC<IProps> = ({ children }) => {
  const [notes, setNotes] = useLocalStorage<INote[]>("NOTES", []);

  const navigate = useNavigate();

  const onCreateNote = () => {
    const id = uuidV4();
    setNotes((prevNotes) => {
      return [...prevNotes, { body: "", title:"", date: Date.now(), id }];
    });
    navigate(`/${id}`);
  };

  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };

  const getNoteById = (id: string) => notes.filter(note => note.id === id)[0];

  const onChangeNote = (id: string, body: string, title: string) => {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, body, title, date: Date.now() }
        } else {
          return note
        }
      })
    })
  }

  return (
    <NotesContex.Provider value={{ notes, onCreateNote, onDeleteNote, getNoteById, onChangeNote }}>
      {children}
    </NotesContex.Provider>
  );
};

export function useNotesContext() {
  return useContext(NotesContex);
}
