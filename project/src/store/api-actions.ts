import {ThunkActionResult} from '../types/action';
import {loadMovies, requireAuthorization, requireLogout, loadPromoMovie, redirectToRoute} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {ServerMovie} from '../types/movie';
import {AuthData} from '../types/auth-data';

export const fetchMovieAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie[]>(APIRoute.Films);
    dispatch(loadMovies(data));
  };
export const fetchPromoMovieAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ServerMovie>(APIRoute.PromoMovie);
    dispatch(loadPromoMovie(data));
  };
export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const result: any = await api.get(APIRoute.Login);
    if (result.status === 200) {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    }
  };
export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };
export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
