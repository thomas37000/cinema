import { IMovies } from '../MovieInterface';
import './Card.css';

const CardMovies = (props: { movie: IMovies }) => {
  const { movie } = props;

  return (
    <div className='cardMovie'>
      <div className='cardImage'>
        <img src={movie.poster_path} alt={movie.title} />
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default CardMovies;
