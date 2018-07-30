import Main from '../components/Main';
import * as actions from '../actions/Main';
import { StoreState } from '../type/Main';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ LevelNum, languageName }: StoreState) {
  return {
    LevelNum,
    name: languageName
  }
}

export function mapDispatchToProps(dispatch: Dispatch < actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);