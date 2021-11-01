import {ActionType, ChangeGenreAction, FilterMoviesByGenreAction} from '../types/action';
export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});
export const filterMoviesByGenre = (): FilterMoviesByGenreAction => ({
  type: ActionType.FilterMoviesByGenre,
});
