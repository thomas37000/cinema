import React, { FunctionComponent } from 'react';

type CardProps = {
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

export const Card: FunctionComponent<CardProps> = ({title, overview}) => (
  <div>
    <h2>{title}</h2>
    <p>{overview}</p>
  </div>
);

// const CardProps = <Card title='Welcome to the Cinema !' overview='To this example' />;
