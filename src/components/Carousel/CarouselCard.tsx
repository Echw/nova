import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

type CarouselCardProps = {
  image: string;
  title: string;
  genres: string[];
  overview: string;
};

export const CarouselCard = ({ image, title, genres, overview }: CarouselCardProps) => {
  return (
    <>
      <div className="embla__slide__img__container">
        <img src={image} alt={title} className="embla__slide__img" />
      </div>
      <div className="embla__slide__description">
        <Heading className="embla__slide__title">{title}</Heading>
        <Text className="embla__slide__genres subtitle">
          {genres.map((genre) => (
            <span key={genre} className="embla__slide__genre">
              {genre}
              <span>&#8226;</span>
            </span>
          ))}
        </Text>
        <Text className="embla__slide__overview subtitle">{overview}</Text>
        <Button className="embla__slide__button" colorPalette="cyan">
          <span> ► Watch Trailer</span>
        </Button>
      </div>
    </>
  );
};
