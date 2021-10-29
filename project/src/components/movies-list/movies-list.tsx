import React from 'react';
import MovieCard from '../movie-card/movie-card';
import { MovieMocks } from '../../types/movie';

type FilmsListProps = {
  movies: MovieMocks;
}

function MoviesList({movies}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {movies.map((film) => <MovieCard movie={film} key={film.id} />)}
    </div>
  );
}

export default MoviesList;
