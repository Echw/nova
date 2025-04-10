import EmblaCarousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { getMovies } from "@/lib/getMovies";

const OPTIONS: EmblaOptionsType = { loop: true };

export default async function Home() {
  const movies = await getMovies();
  console.log(movies);
  return (
    <div className="p-6">
      <EmblaCarousel slides={movies} options={OPTIONS} />
    </div>
  );
}
