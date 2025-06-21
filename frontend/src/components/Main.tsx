import { useState } from "react";
import { searchSongs } from "../api/searchSongs";

import { useListSong } from "../hooks/useList.ts";

export const MainSearch: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [quantitySearch, setQuantitySearch] = useState<number>(1);
  const { cambiarLista } = useListSong();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    searchSongs({ query: searchText, quantity: quantitySearch })
      .then((results) => {
        if (results.error) {
          return console.log("Faltó un dato");
        }
        cambiarLista(results);
      })
      .catch((error) => {
        console.error("Error al buscar canciones:", error);
      });
  };

  return (
    <main className="px-5 my-10 mx-auto w-7/10 rounded  bg-white-alabaster-100 shadow-[0_0_0_2px_#06182c66] shadow-[0_4px_6px_-1px_#06182ca5] shadow-[0_1px_0px_inset_#ffffff14]">
      <form
        className="flex justify-center flex-wrap py-2"
        onSubmit={handleSubmit}
      >
        <h1 className="w-1/1 text-lg">Ingresar URL o Nombre del Video</h1>
        <label className="w-full flex gap-2">
          <div className="flex-1">
            <input
              className="w-full border rounded p-1 px-2 text-xl focus:outline-0"
              type="text"
              name="title"
              id="title"
              placeholder="Ingresar texto..."
              required
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <input
            className="w-20 border px-2 rounded"
            type="number"
            name="quantity"
            id="quantity"
            min={1}
            max={10}
            defaultValue={1}
            onChange={(e) => setQuantitySearch(Number(e.target.value))}
          />
        </label>
        <button
          className="w-1/1 border my-2 py-0.5 hover:cursor-pointer rounded"
          type="submit"
        >
          {" "}
          Buscar{" "}
        </button>
      </form>
    </main>
  );
};
