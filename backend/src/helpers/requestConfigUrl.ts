import dotenv from "dotenv";
dotenv.config();

const YT_KEY = process.env.YT_API_KEY;

type videoSearchType = "playlistItems" | "videos";

export function requestConfigVideoUrl(
  type: videoSearchType,
  part: string,
  id: string
) {
  return `https://www.googleapis.com/youtube/v3/${type}?part=${part}&id=${id}&key=${YT_KEY}`;
}

export function requestConfigPlaylistUrl(
  type: videoSearchType,
  part: string,
  id: string,
  maxResults?: number,
  pageToken?: string
) {
  let url = `https://www.googleapis.com/youtube/v3/${type}?part=${part}&playlistId=${id}&key=${YT_KEY}`;

  if (maxResults) url += `&maxResults=${maxResults}`;
  if (pageToken) url += `&pageToken=${pageToken}`;

  return url;
}
