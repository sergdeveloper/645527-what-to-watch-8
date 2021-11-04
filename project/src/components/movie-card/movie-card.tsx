import { MovieMock } from '../../types/movie';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import VideoPlayer from '../video-player/video-player';


type MovieCardProps = {
  movie: MovieMock;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const {movie} = props;
  const [isActive, setActive] = useState(false);
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <div className="small-film-card__image">
        <VideoPlayer isPlaying={isActive} src={movie.previewVideoLink} poster={movie.posterImage} width={280} height={175} muted />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${movie.id}`}>{movie.name}</Link>
      </h3>
    </article>
  );
}

export default MovieCard;
