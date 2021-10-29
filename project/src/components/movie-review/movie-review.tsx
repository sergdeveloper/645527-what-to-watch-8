import {Comment} from '../../types/comments';

const getFormattedDate = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.getFullYear().toString();
  let month: string = currentDate.getMonth().toString();
  const day: string = currentDate.getDate().toString();

  switch (month) {
    case '0':
      month = 'January';
      break;
    case '1':
      month = 'February';
      break;
    case '2':
      month = 'March';
      break;
    case '3':
      month = 'April';
      break;
    case '4':
      month = 'May';
      break;
    case '5':
      month = 'June';
      break;
    case '6':
      month = 'July';
      break;
    case '7':
      month = 'August';
      break;
    case '8':
      month = 'September';
      break;
    case '9':
      month = 'October';
      break;
    case '10':
      month = 'November';
      break;
    case '11':
      month = 'December';
      break;
    default:
      month = '';
      break;
  }
  return `${month} ${day}, ${year}`;
};

const getFormattedDatetime = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.getFullYear().toString();
  let month: string = currentDate.getMonth().toString();
  let day: string = currentDate.getDate().toString();

  if (day.length < 2) {
    day = `0${day}`;
  }

  switch (month) {
    case '0':
      month = '01';
      break;
    case '1':
      month = '02';
      break;
    case '2':
      month = '03';
      break;
    case '3':
      month = '04';
      break;
    case '4':
      month = '05';
      break;
    case '5':
      month = '06';
      break;
    case '6':
      month = '07';
      break;
    case '7':
      month = '08';
      break;
    case '8':
      month = '09';
      break;
    case '9':
      month = '10';
      break;
    case '10':
      month = '11';
      break;
    case '11':
      month = '12';
      break;
    default:
      month = '';
      break;
  }

  return `${year}-${month}-${day}`;
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
