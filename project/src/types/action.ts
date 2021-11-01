export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  FilterMoviesByGenre = 'filter/filterFilmsByGenre',
}
export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};
export type FilterMoviesByGenreAction = {
  type: ActionType.FilterMoviesByGenre;
};
export type Actions = ChangeGenreAction | FilterMoviesByGenreAction;
