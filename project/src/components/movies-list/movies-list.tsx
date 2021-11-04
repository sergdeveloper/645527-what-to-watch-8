import React, {useEffect} from 'react';
import MovieCard from '../movie-card/movie-card';
import {MovieMocks} from '../../types/movie';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeGenre as changeGenreState} from '../../store/action';
import {resetMoviesList as resetMoviesListState} from '../../store/action';
import {filterMoviesByGenre as filterMoviesByGenreState} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import ShowMore from '../show-more/show-more';

type MoviesListProps = {
  activeMovies: MovieMocks;
}

const mapStateToProps = ({activeMovies, showedMoviesId}: State) => ({
  activeMovies,
  showedMoviesId,
});
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: changeGenreState,
  onGetFilms: filterMoviesByGenreState,
  onResetMoviesList: resetMoviesListState,
}, dispatch);
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MoviesListProps;

function MoviesList(props: ConnectedComponentProps): JSX.Element {
  const {activeMovies, showedMoviesId, onResetMoviesList} = props;
  const showedMovies = activeMovies.slice(0, showedMoviesId);
  useEffect(() => {
    onResetMoviesList();
  }, []);
  return (
    <React.Fragment>
      <div className="catalog__films-list">
        {showedMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
      {activeMovies.length > showedMovies.length ? <ShowMore /> : ''}
    </React.Fragment>
  );
}

export {MoviesList};
export default connector(MoviesList);
