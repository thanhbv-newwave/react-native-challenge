import {createSlice} from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'counter',
  initialState: {
    cardList: [],
  },
  reducers: {
    getCards: state => {},
  },
});

export const {getCards} = cardSlice.actions;

export default cardSlice.reducer;
