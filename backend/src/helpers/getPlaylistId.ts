export function getPlaylistId(url: string): { id: string | null; service: string } {

  try {
    const parsedUrl = new URL(url);
    const validYoutubeHosts = [
      "youtube.com",
      "www.youtube.com",
      "m.youtube.com",
      "music.youtube.com"];

    const service = validYoutubeHosts.includes(parsedUrl.hostname) ? "youtube" : "unknown";

    const match = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    const id = match ? match[1] : null;

    return { id, service };
  } catch {
    return { id: null, service: "unknown" };
  }
}
