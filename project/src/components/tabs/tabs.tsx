import React, {useState} from 'react';
import {MovieMock} from '../../types/movie';
import TabContent from '../content-for-tabs/content-for-tabs';

type TabsProps = {
  movie: MovieMock;
}

const items = [
  {title: 'Overview'},
  {title: 'Details'},
  {title: 'Reviews'},
];

function Tabs({movie}: TabsProps): JSX.Element {
  const [active, setActive] = useState(0);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {items.map((item, index) => (
            <li
              className={`film-nav__item ${index === active ? 'film-nav__item--active' : ''}`}
              key={item.title}
              onClick={(evt: React.MouseEvent<HTMLLIElement>) => {
                setActive(Number(index));
              }}
            >
              <a className="film-nav__link">{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <TabContent movie={movie} tabIndex={active} />
    </div>
  );
}

export default Tabs;
