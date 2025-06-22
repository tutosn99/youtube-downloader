/// <reference types="gapi.client.youtube"
import { errorResponse, isValidId, isValidUrl, thereAreResults, } from "../errors/errorResponsesUrl";
import { fetchYoutubeVideos } from "../services/fetchYoutubeSearchs";
import { extractYoutubeId } from "../helpers/extractYoutubeId";
import { requestConfigVideoUrl } from "../helpers/requestConfigUrl";
import { parseResultByUrl} from "../helpers/ParsedResults"
import { dataType } from "../types/dataType"; 


export async function searchVideobyUrl(data: dataType) {
  if (!isValidUrl(data.url)) {
    return errorResponse("Error de Tipo de URL");
  }

  const idVideo = extractYoutubeId(data.url);

  if (!isValidId(idVideo)) {
    return errorResponse("No se pudo extraer el ID del video");
  }

  const url = requestConfigVideoUrl(
    "videos",
    "snippet,contentDetails,statistics",
    idVideo
  );
  try {
    const respuesta = await fetchYoutubeVideos(url);
    if (!thereAreResults(respuesta)) {
      return errorResponse(
        "No se encontro ese video de Youtube",
        "YOUTUBE_URL_INVALID"
      );
    }
    const items = respuesta?.data?.items;

    if (!items || items.length === 0) {
      return errorResponse(
        "No se encontro ese video de Youtube",
        "YOUTUBE_URL_INVALID"
      );
    }

    const resultData = parseResultByUrl(items)
    return resultData
  } catch {
    return errorResponse("Error al obtener datos del video", "REQUEST_ERROR");
  }
}


