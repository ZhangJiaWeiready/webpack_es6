

import { EnthusiasmAction } from '../actions/Main';
import { StoreState } from '../type/Main';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/Main';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, LevelNum: state.LevelNum + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, LevelNum: Math.max(1, state.LevelNum - 1) };
  }
  return state;
}