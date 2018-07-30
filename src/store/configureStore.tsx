
import { createStore } from 'redux';
import { enthusiasm } from '../reducers/Main';
import { StoreState } from '../type/Main';
import initState from './initState';
export default function () {
  const store = createStore<StoreState, any, any, any>(enthusiasm, initState)
  return store;
}
