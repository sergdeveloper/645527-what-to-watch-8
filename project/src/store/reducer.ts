import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {movies} from '../mocks/films';
const initialState = {
  genre: 'All genres',
  moviesList: movies,
  initialMovies: movies,
  activeMovies: movies,
};
const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.FilterMoviesByGenre:
      if (state.genre === initialState.genre) {
        return {...state, activeMovies: initialState.initialMovies};
      }
      return {...state, activeMovies: initialState.initialMovies.filter((movie) => movie.genre === state.genre)};
    default:
      return state;
  }
};
export {reducer};
