import { IMovies } from '../../MovieInterface';
// import { Link } from 'react-router-dom';
import Img_Api from '../../api/Img_Api';
import './Card.css';

const CardMovies = (props: { movie: IMovies }) => {
  const { movie } = props;

  // type TParams = { id: string | undefined };

  return (
    // <Link to={`/movie/${id}`}>
      <div className='allMovies'>
        <div className='cardMovie'>
          <div className='cardImg'>
            <img src={Img_Api + movie.backdrop_path} alt={movie.title} />
          </div>
          <h2 className='title'>{movie.title}</h2>
          <h4>{movie.vote_average}</h4>
          {/* <p>{movie.overview}</p> */}
        </div>
      </div>
    // </Link>
  );
};

export default CardMovies;
