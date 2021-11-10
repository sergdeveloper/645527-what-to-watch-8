import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {fetchMovieAction, checkAuthAction, fetchPromoMovieAction} from './store/api-actions';
import {ThunkAppDispatch} from './types/action';
import {AuthorizationStatus} from './const';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {redirect} from './store/middlewares/redirect';
const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api), redirect),
  ),
);
(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchMovieAction());
(store.dispatch as ThunkAppDispatch)(fetchPromoMovieAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
