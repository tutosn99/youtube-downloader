import { useContext } from "react";
import { listSongContext } from "../context/listOfSongs";

export function useListSong() {
  const context = useContext(listSongContext);
  if (!context) {
    throw new Error("useListSong debe usarse dentro de un <ListOfSongsProvider>");
  }
  return context;
}
