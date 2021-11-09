import MainScreen from '../main/main';
import {connect, ConnectedProps} from 'react-redux';
import React, { Fragment } from 'react';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const';
import MovieScreen from '../movie/movie';
import SignInScreen from '../signIn/sign-in';
import MyListScreen from '../my-list/my-list';
import AddReviewScreen from '../addReview/addReview';
import PlayerScreen from '../player/player';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
const mapStateToProps = ({authorizationStatus, isDataLoaded, initialMovies, promoMovie}: State) => ({
  authorizationStatus,
  isDataLoaded,
  initialMovies,
  promoMovie,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded, initialMovies, promoMovie} = props;
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen movieAdvert = {promoMovie}/>
        </Route>
        <Route exact path={AppRoute.Film}>
          <MovieScreen movies={initialMovies}/>
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
          render={() => <AddReviewScreen movies={initialMovies} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen movies={initialMovies}/>
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
export {App};
export default connector(App);
