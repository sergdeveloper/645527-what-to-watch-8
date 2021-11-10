import {changeGenre, filterMoviesByGenre, showMoreMovies, resetMoviesList, loadMovies, requireAuthorization, requireLogout, loadPromoMovie, redirectToRoute} from '../store/action';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { AxiosInstance } from 'axios';
import {State} from '../types/state';
export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  FilterMoviesByGenre = 'filter/filterMoviesByGenre',
  ViewMoreMovies = 'films-list/ShowMoreFilms',
  ResetMoviesList = 'resetMoviesList',
  LoadPromoMovie = 'data/loadPromo',
  LoadMovies = 'data/loadMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'game/redirectToRoute',
}
export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};
export type FilterMoviesByGenreAction = {
  type: ActionType.FilterMoviesByGenre;
};

export type ViewMoreMoviesAction = {
  type: ActionType.ViewMoreMovies;
};
export type ResetMoviesListAction = {
  type: ActionType.ResetMoviesList;
};

export type Actions = | ReturnType<typeof changeGenre> | ReturnType<typeof filterMoviesByGenre> | ReturnType<typeof showMoreMovies> | ReturnType<typeof resetMoviesList> | ReturnType<typeof loadMovies> | ReturnType<typeof requireAuthorization> | ReturnType<typeof requireLogout> | ReturnType<typeof loadPromoMovie> | ReturnType<typeof redirectToRoute>;
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
