import { GenresMap } from "@/types/Genres";
import { Movie } from "@/types/Movie";
import { getMovieVideos } from "./getMovieVideos";

export async function getMovie(movie_id: string): Promise<Movie> {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const TMDB_URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${TMDB_API_KEY}&language=pl-PL&region=pl`;

  const response = await fetch(TMDB_URL);
  if (!response.ok) {
    throw new Error("Błąd pobierania filmów");
  }

  const data = await response.json();
  console.log("JEDNE FILM", data);
  const videos = await getMovieVideos(+movie_id);

  return {
    id: data.id,
    title: data.title,
    date: data.date,
    genres: data.genres.map((id: number) => GenresMap[id]).filter(Boolean),
    move_time: data.runtime,
    videos: videos,
    release_date: data.release_date,
    poster: `https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`,
  };
}
