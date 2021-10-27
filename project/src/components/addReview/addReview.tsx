import React from 'react';
import { MovieMocks, MovieMock } from '../../types/movie';
import {useParams, Link} from 'react-router-dom';
import ReviewForm from '../review-form/review-form';


type AddReviewProps = {
  movies: MovieMocks;
}

function AddReviewScreen({movies}: AddReviewProps): JSX.Element {

  const {id} = useParams<{id?: string}>();
  const movie = movies.find((filmItem) => filmItem.id === Number(id)) || {} as MovieMock;
  return(
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={movie.previewImage} alt={movie.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.previewImage} alt={movie.name} width="218" height="327" />
        </div>
      </div>
      <ReviewForm />
    </section>
  );
}

export default AddReviewScreen;
