import React from 'react';
import { MovieMocks, MovieMock } from '../../types/movie';
import {useParams, useHistory} from 'react-router-dom';

type PlayerProps = {
  movies: MovieMocks;
}

function PlayerScreen({movies}: PlayerProps): JSX.Element {
  const history = useHistory();
  const {id} = useParams<{id?: string}>();
  const movie = movies.find((filmItem) => filmItem.id === Number(id)) || {} as MovieMock;

  function onExitClick() {
    history.goBack();
  }
  return(
    <div className="player">
      <video src={movie.videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit" onClick={onExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler">Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
