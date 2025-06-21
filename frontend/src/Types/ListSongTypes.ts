// Use an array type for a list of songs
export type Video = {
  id: number;
  title: string;
  quantity: number;
  duration: number;
  author: string;
  thumbnails: string;
};
export type List = Video[];

export interface ListSongContextType {
  verLista: () => List;
  cambiarLista: (results: List) => void;
}
