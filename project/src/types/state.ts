import {MovieMocks, MovieMock} from '../types/movie';
import {AuthorizationStatus} from '../const';
export type State = {
  genre: string,
  initialMovies: MovieMocks,
  activeMovies: MovieMocks,
  showedMoviesId: number,
  promoMovie: MovieMock,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
