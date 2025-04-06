import { GenresMap } from "@/types/Genres";
import { Movie } from "@/types/Movie";
import { getMovieVideos } from "./getMovieVideos";

export async function getMovies(): Promise<Movie[]> {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const TMDB_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=pl-PL&region=pl&page=1`;

  const response = await fetch(TMDB_URL);
  if (!response.ok) {
    throw new Error("Błąd pobierania filmów");
  }

  const data = await response.json();

  const movies = await Promise.all(
    data.results
      .slice(0, 5)
      .map(
        async (movie: {
          id: number;
          title: string;
          genre_ids: number[];
          backdrop_path: string;
          runtime: number;
          release_date: string;
        }) => {
          const videos = await getMovieVideos(movie.id);

          return {
            id: movie.id,
            title: movie.title,
            genres: movie.genre_ids.map((id) => GenresMap[id]).filter(Boolean),
            move_time: movie.runtime,
            videos: videos,
            release_date: movie.release_date,
            backdrop: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`,
          };
        }
      )
  );

  return movies;
}
