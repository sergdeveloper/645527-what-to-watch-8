import {ActionType, ChangeGenreAction, FilterMoviesByGenreAction, ViewMoreMoviesAction, ResetMoviesListAction} from '../types/action';
export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});
export const filterMoviesByGenre = (): FilterMoviesByGenreAction => ({
  type: ActionType.FilterMoviesByGenre,
});
export const showMoreMovies = (): ViewMoreMoviesAction => ({
  type: ActionType.ViewMoreMovies,
});
export const resetMoviesList = (): ResetMoviesListAction => ({
  type: ActionType.ResetMoviesList,
});
