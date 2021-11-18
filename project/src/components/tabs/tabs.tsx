import React, {useState} from 'react';
import {MovieMock} from '../../types/movie';
import TabContent from '../content-for-tabs/content-for-tabs';
import {Link} from 'react-router-dom';
import {Comments} from '../../types/comments';

type TabsProps = {
  movie: MovieMock;
  comments: Comments;
}

const items = [
  {title: 'Overview'},
  {title: 'Details'},
  {title: 'Reviews'},
];

function Tabs({movie, comments}: TabsProps): JSX.Element {
  const [active, setActive] = useState(0);
  const movieId = movie.id;
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {items.map((item, index) => (
            <li className={`film-nav__item ${index === active ? 'film-nav__item--active' : ''}`} key={item.title} onClick={(evt: React.MouseEvent<HTMLLIElement>) => { setActive(Number(index));}}>
              <Link className="film-nav__link" to={{ pathname: `/films/${movieId}`}}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <TabContent movie={movie} tabIndex={active} comments={comments} />
    </div>
  );
}

export default Tabs;
