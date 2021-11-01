import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import  {movies, mainMovie}  from './mocks/films';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        movieAdvert={mainMovie}
        movies={movies}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
