export type Movie = {
  release_date: string;
  id: number;
  title: string;
  genres: string[];
  backdrop: string;
  move_time: number;
  videos: { id: number; video: string }[];
  date: string;
  poster: string;
};
