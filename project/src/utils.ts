import {MovieMock, ServerMovie} from '../src/types/movie';

export const adaptToClient = (movie: ServerMovie): MovieMock => {
  const adaptedFilm: MovieMock = {
    id: movie.id,
    name: movie.name,
    description: movie.description,
    rating: movie.rating,
    director: movie.director,
    starring: movie.starring,
    genre: movie.genre,
    released: movie.released,
    posterImage: movie['poster_image'],
    previewImage: movie['preview_image'],
    backgroundImage: movie['background_image'],
    backgroundColor: movie['background_color'],
    videoLink: movie['video_link'],
    previewVideoLink: movie['preview_video_link'],
    scoresCount: movie['scores_count'],
    runTime: movie['run_time'],
    isFavorite: movie['is_favorite'],
  };
  return adaptedFilm;
};
export const getMovieRating = (mark: string | number): string => {
  mark = Number(mark);
  if (mark < 3) {
    return 'Bad';
  } else if (mark < 5) {
    return 'Normal';
  } else if (mark < 8) {
    return 'Good';
  } else if (mark < 10) {
    return 'Very Good';
  } else {
    return 'Awesome';
  }
};
