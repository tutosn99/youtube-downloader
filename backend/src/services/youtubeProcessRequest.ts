import { validateTypeVideo } from "../errors/validateTypeVideo";
import { searchVideobyUrl } from "../controllers/searchVideobyUrl";
import { searchVideobyTitle } from "../controllers/searchVideobyTitle";
import { searchPlaylistbyUrl } from "../controllers/searchPlaylistbyUrl";
import type { requestType } from "../types/requestType";

export async function youtubeProcessRequest(search: requestType) {
  const validationResult = validateTypeVideo(search);
  if (!validationResult.ok) {
    return { error: validationResult.reason };
  }

  const resultado = []
 //* meter estas redirecciones a otro modulo
  if (search.type === "playlist") {
    resultado.push(await searchPlaylistbyUrl(search.data));
  }
  if (search.type === "video") {
    if (search.data.title) {resultado.push( await searchVideobyTitle(search.data))} else {
    if (search.data.url) {resultado.push( await searchVideobyUrl(search.data))}
    }
  }
  // devolver un array modularizado (con los datos necesarios para el front) y guardarlos en resultados
  // *
  return resultado;
}
