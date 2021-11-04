import {Actions} from '../../types/action';
import {showMoreMovies as ViewMoreMoviesState} from '../../store/action';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';


const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onShowMoreMovies: ViewMoreMoviesState,
}, dispatch);
const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;
function ShowMore(props: ConnectedComponentProps): JSX.Element {
  const {onShowMoreMovies} = props;
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          onShowMoreMovies();
        }}
      >Show more
      </button>
    </div>
  );
}
export {ShowMore};
export default connector(ShowMore);
