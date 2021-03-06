import React, { useState, useEffect } from 'react';
import IMovies from '../interfaces/MovieInterface';
import CardMovies from './Card/CardMovies';
import { Api } from '../api/api';
import '../App.css';

function App() {
  const [movies, setMovies] = useState<IMovies[]>([]);

  // const { REACT_APP_API_KEY } = process.env;

  const Api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `${Api}?api_key=4f21ecda9ab04354f9529b5ef08b3cd6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('useEffect', data);
        setMovies(data.results);
      });
  }, [Api_key]);

  const fetchMovies =
    movies &&
    movies.map((movie, i) => {
      return <CardMovies key={i} movie={movie} />;
    });

  return (
    <>
      <div className='App'>{fetchMovies}</div>
    </>
  );
}

export default App;
