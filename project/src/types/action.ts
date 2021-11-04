export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  FilterMoviesByGenre = 'filter/filterFilmsByGenre',
  ViewMoreMovies = 'films-list/ShowMoreFilms',
  ResetMoviesList = 'resetFilmsList',
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

export type Actions = ChangeGenreAction | FilterMoviesByGenreAction | ViewMoreMoviesAction | ResetMoviesListAction;
