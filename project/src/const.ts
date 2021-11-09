export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Film = '/films:id',
  AddReview = '/films/:id/review',
  Player = '/plyerid',
  Main = '/'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  PromoMovie = '/promo',
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
