export type Movie = {
  id: number;
  title: string;
  genres: string[];
  backdrop: string;
  move_time: number;
  videos: { id: number; video: string }[];
  overview: string;
};
