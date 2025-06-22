import getVideoId from "get-video-id";
import { getPlaylistId } from "./getPlaylistId";

export function extractYoutubeId(url: string) : {error: {message: string, type: string}} | string{

  const { id, service } = getVideoId(url);
  if (!id){return {error: { message: "la URL no es de Youtube", type: "ID_NOT_VALID" }}}
  if (service !== "youtube") {return {error: { message: "la URL no es de Youtube", type: "URL_NOT_YT" }}}
  
  return id;
}
export function extractYoutubePlaylistId(url: string) : {error: {message: string, type: string}} | string{
  const { id, service } = getPlaylistId(url);
  if (!id){return {error: { message: "la URL no es de una playlist de Youtube", type: "ID_NOT_VALID" }}}
  if (service !== "youtube") {return {error: { message: "la URL no es de una playlist de Youtube", type: "URL_NOT_YT_PLAYLIST" }}}

  return id;
}