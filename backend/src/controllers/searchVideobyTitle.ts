import { dataType } from "../types/dataType";
import { GetListByKeyword } from "youtube-search-api";

export async function searchVideobyTitle(data: dataType) {
  console.log("Buscando videos", data);
  if (!(typeof data.title === "string")) {
    return { error: "Error en el tipo" };
  }

  const results = await GetListByKeyword(data.title, false, 2);
  console.log("Resultados:", results);
  return results;
}
