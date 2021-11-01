import {MovieMocks} from '../../types/movie';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeGenre as changeGenreState} from '../../store/action';
import {filterMoviesByGenre as filterMoviesByGenreState} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';

type GenreListProps = {
  initialMovies: MovieMocks;
}
const mapStateToProps = ({genre, initialMovies, activeMovies}: State) => ({
  genre,
  initialMovies,
  activeMovies,
});
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: changeGenreState,
  onFilterMoviesByGenre: filterMoviesByGenreState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenreListProps;
function GenreList(props: ConnectedComponentProps): JSX.Element {
  const {initialMovies, genre, onChangeGenre, onFilterMoviesByGenre} = props;
  const uniqueGenresSet: Set<string> = new Set();
  uniqueGenresSet.add('All genres');
  initialMovies.map((movie) => (uniqueGenresSet.add(movie.genre)));
  const uniqueGenresArray: string[] = Array.from(uniqueGenresSet);
  return (
    <ul className="catalog__genres-list">
      {uniqueGenresArray.map(
        (genreItem) => (
          <li
            className={genreItem === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            key={genreItem}
            onClick={(evt) => {
              onChangeGenre(genreItem);
              onFilterMoviesByGenre();
            }}
          >
            <a className="catalog__genres-link">{genreItem}</a>
          </li>
        ),
      )}
    </ul>
  );
}
export {GenreList};
export default connector(GenreList);
