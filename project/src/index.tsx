import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import  {movies, mainMovie}  from './mocks/films';

ReactDOM.render(

  <App
    movieAdvert = {mainMovie}
    movies = {movies}
  />,

  document.getElementById('root'));
