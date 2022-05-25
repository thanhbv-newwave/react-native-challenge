import {configureStore} from '@reduxjs/toolkit';
import cardSlice from './card';

export default configureStore({
  reducer: {card: cardSlice},
});
