import { dataType } from "../types/dataType";
import {getInfo} from "ytdl-core";

export async function searchVideobyUrl(data: dataType) {
  if (!(typeof data.url === "string")) {
    return { error: "Error en el tipo" };
  }
  
  const results = await getInfo(data.url);
  console.log("Resultados:", results);
  return results;
}
