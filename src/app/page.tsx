import EmblaCarousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { getMovies } from "@/lib/getMovies";
import { NavBar } from "@/components/Navbar";
import { MoviesList } from "@/components/MoviesList";

const OPTIONS: EmblaOptionsType = { loop: true };

export default async function Home() {
  const movies = await getMovies();
  // console.log(movies);
  return (
    <div className="p-6">
      <NavBar />
      <EmblaCarousel slides={movies} options={OPTIONS} />
      <MoviesList movies={movies} options={OPTIONS} />
    </div>
  );
}
