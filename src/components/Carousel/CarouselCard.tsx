import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { LuTickets } from "react-icons/lu";

type CarouselCardProps = {
  image: string;
  title: string;
  genres: string[];
  date: string;
};

export const CarouselCard = ({ image, title, genres, date }: CarouselCardProps) => {
  return (
    <>
      <div className="embla__slide__img__container">
        <img src={image} alt={title} className="embla__slide__img" />
      </div>
      <div className="embla__slide__description">
        <Heading className="embla__slide__title">{title}</Heading>
        <Text className="embla__slide__genres subtitle">
          <span>{date}</span>
          {genres.map((genre) => (
            <span key={genre} className="embla__slide__genre">
              <span>&#8226;</span>
              {genre}
            </span>
          ))}
        </Text>
        <div>
          <Button className="embla__slide__button embla__slide__button--ticket" colorPalette="cyan">
            <LuTickets /> Buy tickets
          </Button>
          <Button variant="ghost" className="embla__slide__button" colorPalette="cyan">
            <sub>
              <BsThreeDots />
            </sub>
            Read more
          </Button>
        </div>
      </div>
    </>
  );
};
