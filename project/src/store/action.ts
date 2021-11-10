import {ActionType} from '../types/action';
import {AuthorizationStatus, AppRoute} from '../const';
import { ServerMovies, ServerMovie } from '../types/movie';

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
export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

