import React from 'react';
import MovieCard from '../movie-card/movie-card';
import { MovieMocks } from '../../types/movie';

type FilmsListProps = {
  films: MovieMocks;
}

function MoviesList({films}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <MovieCard movie={film} key={film.id} />)}
    </div>
  );
}

export default MoviesList;
