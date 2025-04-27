"use client";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "./CarouselDotButton";
import { usePrevNextButtons } from "./CarouselArrowButtons";
import { Movie } from "@/types/Movie";

import "./carousel.scss";
import { CarouselCard } from "./CarouselCard";
import { CarouselControls } from "./CarouselControls";

type EmblaCarouselProps = {
  slides: Movie[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = ({ slides, options }: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.slice(0, 5).map((movie) => (
            <div className="embla__slide header" key={movie.id}>
              <CarouselCard
                image={movie.backdrop}
                title={movie.title}
                genres={movie.genres}
                date={movie.release_date}
                id={movie.id}
              />
            </div>
          ))}
        </div>
        <CarouselControls
          onClick={onPrevButtonClick}
          onDotButtonClick={onDotButtonClick}
          onNextButtonClick={onNextButtonClick}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
        />
      </div>
    </section>
  );
};

export default EmblaCarousel;
