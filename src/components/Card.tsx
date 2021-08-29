import React, { FunctionComponent } from 'react';

type CardProps = {
  movie_results: {
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path?: null;
    popularity?: number;
    title: string;
    video: boolean;
    vote_average?: number;
    vote_count?: number;
  };
};

export const Card: FunctionComponent<CardProps> = ({ movie_results }) => (
  <aside>
    <h2>{movie_results.title}</h2>
    <p>{movie_results.overview}</p>
  </aside>
);

// const CardProps = <Card title='Welcome to the Cinema !' overview='To this example' />;
