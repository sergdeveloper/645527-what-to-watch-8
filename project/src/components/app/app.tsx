import MainScreen from '../main/main';
import React, { Fragment } from 'react';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const';
import MovieScreen from '../movie/movie';
import SignInScreen from '../signIn/sign-in';
import MyListScreen from '../my-list/my-list';
import AddReviewScreen from '../addReview/addReview';
import PlayerScreen from '../player/player';
import PrivateRoute from '../private-route/private-route';
import { MovieMocks, MovieMock } from '../../types/movie';


type AppScreenProps = {
  movieAdvert: MovieMock;
  movies: MovieMocks;
}

function App({movieAdvert, movies}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen movies ={movies} movieAdvert = {movieAdvert}/>
        </Route>
        <Route exact path={AppRoute.Film}>
          <MovieScreen movies={movies}/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignInScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewScreen movies={movies} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen movies={movies}/>
        </Route>
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
