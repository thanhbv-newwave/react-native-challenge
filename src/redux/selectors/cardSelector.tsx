import {createSelector} from 'reselect';
import {RootState} from '../index';
export const getCard = createSelector(
  (state: RootState) => state,
  state => state.card,
);
