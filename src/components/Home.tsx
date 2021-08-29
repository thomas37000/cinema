import React, { useState, useEffect } from 'react';
// import { IMovie } from '../MovieInterface';
import axios, { AxiosResponse } from 'axios';
import { Card } from './Card';

interface IMovies {
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
}

const Home: React.FC<IMovies> = ({ movie_results }) => {
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    axios
      .get<IMovies[]>(
        'https://api.themoviedb.org/3/movie/550?api_key=4f21ecda9ab04354f9529b5ef08b3cd6'
      )
      .then((res: AxiosResponse) => {
        console.log('movies', res.data);
        setMovies(res.data);
      });
  }, []);

  return (
    <div>
      Go to the Cinema !
      <div>
        {movies.map((movie) => {
          return (
            <ul>
              <li key={movie.id}>{movie.title}</li>
              <li>{movie.overview}</li>
              <li>{movie.poster_path}</li>
            </ul>
            // <Card movie={...movie} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
