import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {MovieMocks} from '../../types/movie';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeGenre as changeGenreState} from '../../store/action';
import {filterMoviesByGenre as filterMoviesByGenreState} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';

type MoviesListProps = {
  activeMovies: MovieMocks;
}

const mapStateToProps = ({genre, initialMovies, activeMovies}: State) => ({
  genre,
  initialMovies,
  activeMovies,
});
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: changeGenreState,
  onGetFilms: filterMoviesByGenreState,
}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MoviesListProps;

function MoviesList(props: ConnectedComponentProps): JSX.Element {
  const {activeMovies} = props;
  return (
    <div className="catalog__films-list">
      {activeMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  );
}

export {MoviesList};
export default connector(MoviesList);
