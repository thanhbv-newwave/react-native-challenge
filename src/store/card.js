import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getCardData } from '../network/controllers/cardController';

export const getCardList = createAsyncThunk(
  // Tên action
  'card/list',
  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data, { rejectWithValue }) => {
    const cardResult = await getCardData();
        if (cardResult.isSuccess) {
          const cardListResult = cardResult.data?.cards;
          return cardListResult ?? []
        }
    // Nếu bị lỗi thì reject
      return rejectWithValue(cardResult.errors);
  }
);


export const cardSlice = createSlice({
  name: 'counter',
  initialState: {
    cardList: [],
    isLoading: false,
    errorMessage: ''
  },
  reducers: {
    setCards: (state, action) => {
      state.cardList = action?.payload
    },
  },
  // Code logic xử lý async action
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(getCardList.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(getCardList.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.cardList = action.payload;
    });

    // Khi thực hiện action login thất bại (Promise rejected)
    builder.addCase(getCardList.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

export const {setCards} = cardSlice.actions;

export default cardSlice.reducer;
