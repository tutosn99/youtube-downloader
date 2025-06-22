import { searchVideobyUrl } from "../controllers/searchVideobyUrl";
import { searchVideobyTitle } from "../controllers/searchVideobyTitle";
import { searchPlaylistbyUrl } from "../controllers/searchPlaylistbyUrl";
import type { requestType } from "../types/requestType";

export async function searchHandler(search: requestType) {
  const resultado = [];

  if (search.type === "playlist") {
    const res = await searchPlaylistbyUrl(search.data);
    resultado.push(res);
  }
  if (search.type === "video") {
    if (search.data.title) {
      const res = await searchVideobyTitle(search.data);
      resultado.push(res);
    } else {
      if (search.data.url) {
        const res = await searchVideobyUrl(search.data);
        resultado.push(res);
      }
    }
  }
  return resultado;
}
