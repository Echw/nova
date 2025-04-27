"use client";

import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { Movie } from "@/types/Movie";
import "./movies_list.scss";
import { CarouselControls } from "../Carousel/CarouselControls";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "../Carousel/CarouselDotButton";
import { usePrevNextButtons } from "../Carousel/CarouselArrowButtons";

type MovieListItemProps = {
  poster: string;
  title: string;
  genres: string[];
  date: string;
  id: number;
};

type MoviesListProps = {
  movies: Movie[];
  options?: EmblaOptionsType;
};

export const MoviesList = ({ movies, options }: MoviesListProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);
  const itemsPerSlide = 8;
  const slides = Array.from({ length: Math.ceil(movies.length / itemsPerSlide) });

  return (
    <Container mx="auto" w={"60%"} my={10} pb={"4rem"} className="week__list">
      <Heading as="h3" size="3xl" mb={10} id="repertuar">
        This Week
      </Heading>
      <div className="embla  ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((_, i) => (
              <Grid key={i} templateColumns="repeat(4, 1fr)" gap="12" className="embla__slide">
                {movies.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((movie) => (
                  <MovieListItem
                    id={movie.id}
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.title}
                    genres={movie.genres}
                    date={movie.release_date}
                  />
                ))}
              </Grid>
            ))}
          </div>
        </div>
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
    </Container>
  );
};

const MovieListItem = ({ poster, title, date, genres, id }: MovieListItemProps) => {
  return (
    <Link href={`/movies/${id}`}>
      <GridItem className="movie__list__item">
        <img src={poster} alt={title} width={"200%"} />
        <Text className="movie__list__title" my={3}>
          {title}
        </Text>
        <Text className="movie__list__description">{date}</Text>
        <Text className="movie__list__description">{genres[0]}</Text>
      </GridItem>
    </Link>
  );
};
