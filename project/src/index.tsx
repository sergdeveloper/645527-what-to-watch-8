import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  Genre: 'action',
  Title: 'Very good movie',
  Release: 2015,
};

ReactDOM.render(

  <App
    genre = {Setting.Genre}
    title = {Setting.Title}
    release ={Setting.Release}
  />,

  document.getElementById('root'));
