import { IMovies } from '../MovieInterface';
import Img_Api from '../api/Img_Api';
import './Card.css';

const CardMovies = (props: { movie: IMovies }) => {
  const { movie } = props;

  return (
    <div className='allMovies'>
      <div className='cardMovie'>
        <div className='cardImg'>
          <img src={Img_Api + movie.backdrop_path} alt={movie.title} />
        </div>
        <h2 className='title'>{movie.title}</h2>
        {/* <p>{movie.overview}</p> */}
      </div>
    </div>
  );
};

export default CardMovies;
