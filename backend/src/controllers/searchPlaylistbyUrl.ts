import { GetPlaylistData } from "youtube-search-api";
import { dataType } from "../types/dataType";

export async function searchPlaylistbyUrl(data: dataType) {
  console.log("Buscando playlist", data);
  if (!(typeof data.url === "string")) {
    return { error: "Error en el tipo" };
  }

  const results = await GetPlaylistData(data.url, 1);
  console.log("Resultados:", results);
  return results;
}