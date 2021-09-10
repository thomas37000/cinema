import React, { useState, useEffect } from 'react';
import { IMovies } from '../MovieInterface';
import axios, { AxiosResponse } from 'axios';
import CardMovies from './CardMovies';

const Home: React.FC<IMovies> = () => {
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
            <li>
              <CardMovies movie={movie} />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Home;