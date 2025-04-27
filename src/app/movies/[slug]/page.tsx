import { getMovie } from "@/lib/getMovie";
import { Heading } from "@chakra-ui/react";
import React from "react";
import "./page.scss";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  console.log(slug);
  const movie = await getMovie(slug);
  console.log(movie);

  return (
    <>
      <div className="slide__img__container slide__img__container--page">
        <img className="slide__img" src={movie.backdrop} alt={movie.title} />
      </div>
      <div className="grid">
        <img src={movie.poster} alt={movie.title} className="page__poster" />
        <Heading className="main__title">{movie.title}</Heading>
      </div>
    </>
  );
};

export default page;
