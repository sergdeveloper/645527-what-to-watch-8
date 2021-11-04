import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {movies} from '../mocks/films';
const MOVIES_PER_STEP = 8;
const initialState = {
  genre: 'All genres',
  moviesList: movies,
  initialMovies: movies,
  activeMovies: movies,
  showedMoviesId: MOVIES_PER_STEP,
};
const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ResetMoviesList:
      return {...state, showedMoviesId: initialState.showedMoviesId};
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload, showedMoviesId: initialState.showedMoviesId};
    case ActionType.FilterMoviesByGenre:
      if (state.genre === initialState.genre) {
        return {...state, activeMovies: initialState.initialMovies};
      }
      return {...state, activeMovies: initialState.initialMovies.filter((movie) => movie.genre === state.genre)};
    case ActionType.ViewMoreMovies:
      return {...state, showedMoviesId: state.showedMoviesId + MOVIES_PER_STEP};
    default:
      return state;
  }
};
export {reducer};
