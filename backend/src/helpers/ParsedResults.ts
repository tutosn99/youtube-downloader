import { SearchResult } from "youtube-search-api";
import { parseISODurationToMinutesSeconds } from "./parseISODurationToMinutesSeconds";

export function parsedResultByTitle(results: SearchResult) {
  const item = results.items[0];
  if (!item) return null;

  const parsedResult = {
    id: item.id,
    title: item.title,
    channelTitle: item.channelTitle,
    duration: item.length?.simpleText ?? "",
    thumbnail: item.thumbnail?.thumbnails?.at(-1)?.url ?? "",
    videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
  };

  return parsedResult;
}

export function parseResultByUrl(items: gapi.client.youtube.Video[]) {
  const result = items[0];
  const snippet = result?.snippet;
  const statistics = result?.statistics;
  const contentDetails = result?.contentDetails;

  const parsedResults = {
    id: result?.id ?? "",
    title: snippet?.title ?? "",
    description: snippet?.description ?? "",
    channelTitle: snippet?.channelTitle ?? "",
    duration: parseISODurationToMinutesSeconds(contentDetails?.duration ?? ""),
    views: parseInt(statistics?.viewCount ?? "0"),
    likes: parseInt(statistics?.likeCount ?? "0"),
    comments: parseInt(statistics?.commentCount ?? "0"),
    language: snippet?.defaultAudioLanguage ?? "",
    tags: snippet?.tags ?? [],
    thumbnail:
      snippet?.thumbnails?.maxres?.url || snippet?.thumbnails?.high?.url || "",
    videoUrl: `https://www.youtube.com/watch?v=${result?.id ?? ""}`,
  };
  return parsedResults;
}

export function parseResultsByUrl(items: gapi.client.youtube.Playlist[]) {
  // const videoId = content?.videoId || snippet?.resourceId?.videoId || item?.id || "";

  const playlist = items.map((i) => {
    const videoId = i?.id;
    const result = i;
    const snippet = result?.snippet;

    const parsedResult = {
      id: videoId,
      title: snippet?.title ?? "",
      description: snippet?.description ?? "",
      channelTitle: snippet?.channelTitle ?? "",
      thumbnail:
        snippet?.thumbnails?.maxres?.url ||
        snippet?.thumbnails?.high?.url ||
        snippet?.thumbnails?.medium?.url ||
        snippet?.thumbnails?.default?.url ||
        "",
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
    };
    return parsedResult;
  });
  return playlist;
}
