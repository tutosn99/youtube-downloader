import { dataType } from "../types/dataType";
import {
  isValidUrl,
  errorResponse,
  isValidId,
} from "../errors/errorResponsesUrl";
import { extractYoutubePlaylistId } from "../helpers/extractYoutubeId";
import { fetchYoutubePlaylist } from "../services/fetchYoutubeSearchs";
import { requestConfigPlaylistUrl } from "../helpers/requestConfigUrl";
import {parseResultsByUrl} from '../helpers/ParsedResults'

export async function searchPlaylistbyUrl(data: dataType) {
  if (!isValidUrl(data.url)) {
    return errorResponse("Error de Tipo de URL");
  }

  const idPlaylist = extractYoutubePlaylistId(data.url);

  if (!isValidId(idPlaylist)) {
    return errorResponse("No se pudo extraer el ID del video");
  }

  const url = requestConfigPlaylistUrl(
    "playlistItems",
    "snippet,contentDetails",
    idPlaylist,
    50, // maxResults
    undefined // pageToken
  );
  try {
    const respuesta = await fetchYoutubePlaylist(url);
    
    const items = respuesta?.data?.items;

    if (!items || items.length === 0) {
      return errorResponse(
        "No se encontro ese video de Youtube",
        "YOUTUBE_URL_INVALID"
      );
    }

    
    const resultData = parseResultsByUrl(items)

    return resultData;

  } catch {
    return errorResponse("Error al obtener datos del video", "REQUEST_ERROR");
  }
}
