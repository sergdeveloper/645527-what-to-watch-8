import MoviesList from '../movies-list/movies-list';
import {MovieMock } from '../../types/movie';
import {Link} from 'react-router-dom';
import GenreList from '../genre-list/genre-list';
import UserBlock from '../user/user';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchMovieAction, fetchPromoMovieAction} from '../../store/api-actions';

type MainScreenProps = {
  movieAdvert: MovieMock;
}
function MainScreen(props: MainScreenProps): JSX.Element {
  const {movieAdvert} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieAction());
    dispatch(fetchPromoMovieAction());
  }, [dispatch]);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={movieAdvert.backgroundImage} alt={movieAdvert.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={movieAdvert.posterImage} alt={movieAdvert.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{movieAdvert.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movieAdvert.genre}</span>
                <span className="film-card__year">{movieAdvert.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`player/${movieAdvert.id}`} className="btn btn--play film-card__button" type="button" >
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <div className="catalog__films-list">
            <MoviesList />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

export default MainScreen;
