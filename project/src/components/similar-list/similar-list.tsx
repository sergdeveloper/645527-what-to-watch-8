import SmallFilmCard from '../movie-card/movie-card';
import {MovieMock, MovieMocks} from '../../types/movie';

type SimilarMoviesListProps = {
  movies: MovieMocks;
  currentMovie: MovieMock;
}
function SimilarMoviesList({movies, currentMovie}: SimilarMoviesListProps): JSX.Element {
  const similarMovies = movies.filter((movie) => movie.genre === currentMovie.genre && movie.id !== currentMovie.id);
  return (
    <div className="catalog__films-list">
      {similarMovies.map((movie) => <SmallFilmCard movie={movie} key={movie.id} />)}
    </div>
  );
}

export default SimilarMoviesList;
