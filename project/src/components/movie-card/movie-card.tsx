import { MovieMock } from '../../types/movie';
import {Link} from 'react-router-dom';
import {useState} from 'react';

function MovieCard(props: {movie: MovieMock}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setActive] = useState(false);
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <div className="small-film-card__image">
        <img src={props.movie.previewImage} alt={props.movie.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.movie.id}`}>{props.movie.name}</Link>
      </h3>
    </article>
  );
}

export default MovieCard;
