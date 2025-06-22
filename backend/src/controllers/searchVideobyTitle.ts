import { dataType } from "../types/dataType";
import { GetListByKeyword } from "youtube-search-api";
import {parsedResultByTitle} from '../helpers/ParsedResults'

export async function searchVideobyTitle(data: dataType) {
  console.log("Buscando videos", data);
  if (!(typeof data.title === "string")) {
    return { error: "Error en el tipo" };
  }

  const respuesta = await GetListByKeyword(data.title, false, 2);
  const results = parsedResultByTitle(respuesta)
  console.log("Resultados:", results);
  return results;
}
