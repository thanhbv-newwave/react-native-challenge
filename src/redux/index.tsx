import {configureStore} from '@reduxjs/toolkit';
import cardSlice from './card.slice';

export const store = configureStore({
  reducer: {card: cardSlice},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
