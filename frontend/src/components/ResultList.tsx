import { useListSong } from "../hooks/useList.ts";
import { VideoCard } from "./VideoCard.tsx";

export const ResultList = () => {
  const { verLista } = useListSong();
  const list = verLista();

  return (
    <>
      <div className="w-8/10 mx-auto">
        {/* <button className='hover:cursor-pointer' onClick={() => {console.log(verLista())}}>Test</button> */}
        <ul className="flex flex-wrap gap-y-3 mx-auto">
          {list.map((video, index) => {
            return <VideoCard key={index} {...video} />;
          })}
        </ul>
      </div>
    </>
  );
};
