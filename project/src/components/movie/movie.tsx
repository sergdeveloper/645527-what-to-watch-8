import React, {useEffect} from 'react';
import { MovieMock, ServerMovie } from '../../types/movie';
import {useParams, Link} from 'react-router-dom';
import Tabs from '../tabs/tabs';
import SimilarMoviesList from '../similar-list/similar-list';
import UserBlock from '../user/user';
import LoadingScreen from '../loading-screen/loading-screen';
import { connect, ConnectedProps} from 'react-redux';
import {fetchCurrentMovieAction, fetchSimilarMoviesAction, fetchReviewsAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import { State } from '../../types/state';
import {AuthorizationStatus} from '../../const';

const mapStateToProps = ({currentMovie, similarMovies, comments, authorizationStatus}: State) => ({
  currentMovie,
  similarMovies,
  comments,
  authorizationStatus,
});
const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentMovie(id: number) {
    dispatch(fetchCurrentMovieAction(id));
  },
  fetchSimilarMovies(id: number) {
    dispatch(fetchSimilarMoviesAction(id));
  },
  fetchReviews(id: number) {
    dispatch(fetchReviewsAction(id));
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MovieScreen(props: ConnectedComponentProps): JSX.Element {
  const {fetchCurrentMovie, fetchSimilarMovies, currentMovie, fetchReviews, similarMovies, comments, authorizationStatus} = props;
  const id = +(useParams<{id: string}>().id);
  const movie: MovieMock | ServerMovie = currentMovie;
  useEffect(() => {
    fetchCurrentMovie(id);
  }, [fetchCurrentMovie, id]);
  useEffect(() => {
    fetchSimilarMovies(id);
  }, [fetchSimilarMovies, id]);
  useEffect(() => {
    fetchReviews(id);
  }, [fetchReviews, id]);
  if (movie.id === 0) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
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
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${movie.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to='/mylist' className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.Auth
                  ? <Link to={`/films/${movie.id}/review`} className="btn film-card__button">Add review</Link>: ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.previewImage} alt={movie.name} width="218" height="327" />
            </div>
            <Tabs movie={movie} comments={comments}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SimilarMoviesList movies={similarMovies} currentMovie={movie}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export {MovieScreen};
export default connector(MovieScreen);
