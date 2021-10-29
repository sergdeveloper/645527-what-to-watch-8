import  React, {useState, ChangeEvent} from 'react';
import RatingInputs from '../ratings/ratings';

function ReviewForm(): JSX.Element {
  const [message, setMessage] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const inputs =<RatingInputs />;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <RatingInputs />
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            onChange={( {target}: ChangeEvent<HTMLTextAreaElement>) => {
              setMessage(target.value);
            }}
            value={message}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
