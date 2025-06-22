/**
 * Fetches YouTube videos using the provided API URL.
 *
 * @param url - The full YouTube Data API v3 URL, including query parameters such as `part`, `id`, and the API key.
 * @returns A promise resolving to the Axios response containing the YouTube VideoListResponse.
 */
import axios from "axios";

export async function fetchYoutubeVideos(url : string) {
    const res = await axios.get<gapi.client.youtube.VideoListResponse>(url);
    return res
}

export async function fetchYoutubePlaylist(url: string) {
    const res = await axios.get<gapi.client.youtube.PlaylistListResponse>(url);
    return res;
}
