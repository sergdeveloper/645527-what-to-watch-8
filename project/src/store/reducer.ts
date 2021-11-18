import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {MovieMock, MovieMocks, ServerMovie} from '../types/movie';
import {AuthorizationStatus, emptyMovie} from '../const';
import { adaptToClient } from '../utils';
const MOVIES_PER_STEP = 8;
const initialState = {
  genre: 'All genres',
  initialMovies: [],
  activeMovies: [],
  showedMoviesId: MOVIES_PER_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  similarMovies: [],
  comments: [],
  promoMovie: emptyMovie,
  currentMovie: emptyMovie,
};
const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ResetMoviesList:
      return {...state, showedMoviesId: initialState.showedMoviesId};
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload, showedMoviesId: initialState.showedMoviesId};
    case ActionType.FilterMoviesByGenre:
      if (state.genre === initialState.genre) {
        return {...state, activeMovies: state.initialMovies};
      }
      return {...state, activeMovies: state.initialMovies.filter((movie: MovieMock) => movie.genre === state.genre)};
    case ActionType.ViewMoreMovies:
      return {...state, showedMoviesId: state.showedMoviesId + MOVIES_PER_STEP};
    case ActionType.LoadPromoMovie: {
      const {promoMovie} = action.payload;
      const adaptedPromoMovie = adaptToClient(promoMovie);
      return {...state, promoMovie: adaptedPromoMovie};
    }
    case ActionType.LoadCurrentMovie: {
      const {currentFilm} = action.payload;
      const adaptedCurrentMovie = adaptToClient(currentFilm);
      return {...state, currentMovie: adaptedCurrentMovie};
    }
    case ActionType.LoadSimilarMovies: {
      const {similarMovies} = action.payload;
      const adaptedSimilarMovies = similarMovies.map((similarMovie: ServerMovie) => adaptToClient(similarMovie));
      return {...state, similarMovies: adaptedSimilarMovies};
    }
    case ActionType.LoadComments: {
      const {comments} = action.payload;
      return {...state, comments: comments};
    }
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true,
      };
    case ActionType.LoadMovies:{
      const {movies} = action.payload;
      const adaptedMovies: MovieMocks = movies.map((movie: ServerMovie) => adaptToClient(movie));
      return {...state, initialMovies: adaptedMovies, activeMovies: adaptedMovies};
    }
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};
export {reducer};
