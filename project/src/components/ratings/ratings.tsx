import React, {ChangeEvent} from 'react';

type RatingInputsProps = {
  onRatingChange: (value: number) => void;
}
function RatingInputs({onRatingChange}: RatingInputsProps): JSX.Element {
  const inputs = [];
  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    onRatingChange(Number(evt.target.value));
  }
  for (let i=10; i>=1; i--) {
    const starId = `star-${i}`;
    inputs.push(
      <React.Fragment key={starId}>
        <input
          className="rating__input"
          id={starId}
          type="radio"
          name="rating"
          value={i}
          onChange={handleChange}
        />
        <label className="rating__label" htmlFor={starId}>Rating {i}</label>
      </React.Fragment>,
    );
  }
  return (
    <div className="rating__stars">
      {inputs}
    </div>
  );
}
export default RatingInputs;
