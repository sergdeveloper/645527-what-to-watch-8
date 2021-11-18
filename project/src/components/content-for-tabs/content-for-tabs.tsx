import React from 'react';
import {MovieMock} from '../../types/movie';
import {Comments} from '../../types/comments';
import FilmReview, {getFormattedRuntime} from '../movie-review/movie-review';
import {getMovieRating} from '../../utils';

type TabContentProps = {
  movie: MovieMock;
  tabIndex: number;
  comments: Comments;
}
function TabContent({movie, tabIndex, comments}: TabContentProps): JSX.Element {
  const starsString = movie.starring.slice(0, 3).join(', ');
  if (tabIndex === 0) {
    return (
      <React.Fragment>
        <div className="film-rating">
          <div className="film-rating__score">{movie.rating}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">{getMovieRating(movie.rating)}</span>
            <span className="film-rating__count">{movie.scoresCount} ratings</span>
          </p>
        </div>
        <div className="film-card__text">
          <p>{movie.description}</p>
          <p className="film-card__director"><strong>Director: {movie.director}</strong></p>
          <p className="film-card__starring"><strong>Starring: {starsString} and other</strong></p>
        </div>
      </React.Fragment>
    );
  } else if (tabIndex === 1) {
    const starsWithoutLast: string[] = movie.starring.slice();
    const starsLastItem: string[] = starsWithoutLast.splice(-1, 1);
    return (
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{movie.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {starsWithoutLast.map((starItem) => (
                <React.Fragment key={starItem}>
                  {starItem},<br />
                </React.Fragment>
              ))}
              {starsLastItem[0]}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{getFormattedRuntime(movie.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{movie.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{movie.released}</span>
          </p>
        </div>
      </div>
    );
  }
  const oddComments: Comments = [];
  const evenComments: Comments = [];
  comments.map((comment, index) => {
    index % 2 === 0 ? oddComments.push(comment) : evenComments.push(comment);
  });
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {oddComments.map((review) => (
          <FilmReview review={review} key={review.id}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {evenComments.map((comment) => (
          <FilmReview review={comment} key={comment.id}/>
        ))}
      </div>
    </div>
  );
}

export default TabContent;
