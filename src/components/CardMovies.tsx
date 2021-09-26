import { IMovies } from '../MovieInterface';
import Img_Api from "./Img_Api";
import './Card.css';

const CardMovies = (props: { movie: IMovies }) => {
  const { movie } = props;

  return (
    <div className='cardMovie'>
      <div className='cardImage'>
      <img src={Img_Api + movie.backdrop_path} alt={movie.title} />
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default CardMovies;
