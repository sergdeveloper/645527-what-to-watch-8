import SmallFilmCard from '../movie-card/movie-card';
import {MovieMock, MovieMocks} from '../../types/movie';
import {SIMILAR_MOVIES_COUNT} from '../../const';

type SimilarMoviesListProps = {
  movies: MovieMocks;
  currentMovie: MovieMock;
}
function SimilarMoviesList({movies, currentMovie}: SimilarMoviesListProps): JSX.Element {
  let similarMovies = movies.filter((movie) => movie.id !== currentMovie.id);
  if (similarMovies.length > SIMILAR_MOVIES_COUNT) {
    similarMovies = similarMovies.slice(0, SIMILAR_MOVIES_COUNT);
  }
  return (
    <div className="catalog__films-list">
      {similarMovies.map((movie) => <SmallFilmCard movie={movie} key={movie.id} />)}
    </div>
  );
}

export default SimilarMoviesList;
