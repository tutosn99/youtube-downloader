import { createContext, ReactNode, useState } from "react";
import type { List, ListSongContextType } from '../Types/ListSongTypes'


export const listSongContext = createContext<ListSongContextType | undefined>(
  undefined
);

export function ListOfSongsProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<List>([]);

  function cambiarLista(results: List): void {
    setList(results);
  }

  function verLista() {
    return list;
  }

  return (
    <listSongContext.Provider value={{ cambiarLista, verLista }}>
      {children}
    </listSongContext.Provider>
  );
}