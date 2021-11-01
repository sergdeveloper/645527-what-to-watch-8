import {Comment} from '../../types/comments';

export const getFormattedDate = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.getFullYear().toString();
  const month: string = currentDate.toLocaleString('en', { month: 'long' });
  const day: string = currentDate.getDate().toString();
  return `${month} ${day}, ${year}`;
};
export const getFormattedDatetime = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.toLocaleString('en', {year: 'numeric'});
  const month: string = currentDate.toLocaleString('en', {month: '2-digit'});
  const day: string = currentDate.toLocaleString('en', {day: '2-digit'});
  return `${year}-${month}-${day}`;
};
export const getFormattedRuntime = (durationInMinutes: number): string => {
  const minutesInHour = 60;
  let result: string;
  const minutes: number = (durationInMinutes) % minutesInHour;
  if (durationInMinutes >= minutesInHour) {
    const hours: number = Math.floor(durationInMinutes / minutesInHour);
    result = `${hours}h ${minutes}m`;
    return result;
  }
  result = `${minutes}m`;
  return result;
};


type MovieReviewProps = {
  review: Comment;
}

function MovieReview({review}: MovieReviewProps): JSX.Element {
  const formattedDate: string = getFormattedDate(review.date);
  const formattedDatetime: string = getFormattedDatetime(review.date);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={formattedDatetime}>{formattedDate}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default MovieReview;
