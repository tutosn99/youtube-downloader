export function parseISODurationToMinutesSeconds(isoDuration : string) {
    // Example input: "PT5M30S"
    const match = isoDuration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return { minutes: 0, seconds: 0 };
    const minutes = parseInt(match[1] || "0", 10);
    const seconds = parseInt(match[2] || "0", 10);
    return `${minutes}:${seconds}`;
}