import {MovieMocks, MovieMock} from '../types/movie';
import {AuthorizationStatus} from '../const';
import {Comments} from '../types/comments';
export type State = {
  genre: string,
  initialMovies: MovieMocks,
  activeMovies: MovieMocks,
  showedMoviesId: number,
  promoMovie: MovieMock,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  currentMovie: MovieMock,
  similarMovies: MovieMocks,
  comments: Comments,
};
