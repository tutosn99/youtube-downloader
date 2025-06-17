import type { Video } from "../Types/ListSongTypes";

export const VideoCard = (Prop: Video) => {
  const video = Prop
  return( 
  <li className='border flex w-1/1 '>
    <h1>{video.title}</h1>

  </li>);
};
