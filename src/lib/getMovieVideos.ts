export async function getMovieVideos(movieId: number) {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const TMDB_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=pl-PL`;

  const response = await fetch(TMDB_URL);
  if (!response.ok) {
    throw new Error("Błąd pobierania filmów");
  }

  const data = await response.json();
  console.log(data);
  return data.results.map((video: { id: number; key: string }) => ({
    id: video.id,
    video: video.key,
  }));
}
