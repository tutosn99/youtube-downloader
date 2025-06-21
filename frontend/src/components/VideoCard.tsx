import type { Video } from "../Types/ListSongTypes";

export const VideoCard = (Prop: Video) => {
  const video = Prop;
  const img = video.thumbnails[1];
  return (
    <li className="border border-gray-950 rounded flex w-1/1 h-max-40 py-4 px-3 gap-x-5">
      <div className=" border flex items-center w-3/10">
        <img src={img} className="h-1/1 object-cover" alt="Img of Video"></img>
      </div>
      <div className="text">
        <h1 className="text-[clamp(1.25rem,2vw + 1rem ,2rem)] font-bold">{video.title}</h1>
        <h2 className="text-[clamp(1rem,1.5vw + 1rem,1.5rem)]">{video.author}</h2>
        <h2 className="text-[clamp(0.875rem,1vw + 1rem,1.125rem)]">Duración {video.duration}</h2>
      </div>
    </li>
  );
};
