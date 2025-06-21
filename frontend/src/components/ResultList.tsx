import { useListSong } from "../hooks/useList.ts";
import { VideoCard } from "./VideoCard.tsx";

export const ResultList = () => {
  const { verLista } = useListSong();
  const list = verLista();
  return (
    <>
    
      <div className="w-full sm:w-9/12 md:w-8/12 lg:w-8/10 mx-auto pb-20">
        <ul className="flex flex-wrap gap-y-3 mx-auto">
          {list.map((video, index) => {
            return <VideoCard key={index} {...video} />;
          })}
        </ul>
      </div>
    </>
  );
};
