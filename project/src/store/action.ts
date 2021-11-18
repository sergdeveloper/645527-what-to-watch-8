import {ActionType} from '../types/action';
import {AuthorizationStatus, AppRoute} from '../const';
import { ServerMovies, ServerMovie } from '../types/movie';
import {Comments} from '../types/comments';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);
export const filterMoviesByGenre = () => ({
  type: ActionType.FilterMoviesByGenre,
} as const);
export const showMoreMovies = () => ({
  type: ActionType.ViewMoreMovies,
} as const);
export const resetMoviesList = () => ({
  type: ActionType.ResetMoviesList,
} as const);
export const loadMovies = (movies: ServerMovies) => ({
  type: ActionType.LoadMovies,
  payload: {
    movies,
  },
} as const);
export const loadSimilarMovies = (similarMovies: ServerMovies) => ({
  type: ActionType.LoadSimilarMovies,
  payload: {
    similarMovies,
  },
} as const);
export const loadComments = (comments: Comments) => ({
  type: ActionType.LoadComments,
  payload: {
    comments,
  },
} as const);
export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);
export const loadPromoMovie = (promoMovie: ServerMovie) => ({
  type: ActionType.LoadPromoMovie,
  payload: {
    promoMovie,
  },
} as const);
export const loadCurrentMovie = (currentFilm: ServerMovie) => ({
  type: ActionType.LoadCurrentMovie,
  payload: {
    currentFilm,
  },
} as const);
export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

