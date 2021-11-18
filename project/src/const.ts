export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Main = '/',
  NotFound = '/404',
}

export const SIMILAR_MOVIES_COUNT = 4;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  PromoMovie = '/promo',
  Review = '/comments/:id',
  CurrentMovie = '/films/',
  SimilarMovies = '/films/:id/similar',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const emptyMovie = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: '',
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};
