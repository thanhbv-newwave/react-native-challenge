import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {DeleteCard, FetchCard, AddCard} from '../card/application';
import {CardService} from '../card/infastructure/service';

export const getCardList = createAsyncThunk(
  'card/list',
  async (data, {rejectWithValue}) => {
    const service = new CardService();
    const interactor = new FetchCard(service);
    const cardResult = await interactor.fetCardService.getCard();
    if (cardResult.isSuccess) {
      return cardResult;
    }
    return rejectWithValue(cardResult.errors);
  },
);

export const addCard = createAsyncThunk(
  'card/add',
  async (data, {rejectWithValue}) => {
    const service = new CardService();
    const interactor = new AddCard(service);
    const cardResult = await interactor.addCardService.addCard();
    if (cardResult.isSuccess) {
      return cardResult;
    }
    return rejectWithValue(cardResult.errors);
  },
);

export const deleteCard = createAsyncThunk(
  'card/delete',
  async (data, {rejectWithValue}) => {
    console.log('data: ', data);
    const service = new CardService();
    const interactor = new DeleteCard(service);
    const cardResult = await interactor.deleteCardService.deleteCard(data);
    if (cardResult.isSuccess) {
      return cardResult;
    }
    return rejectWithValue(cardResult.errors);
  },
);

export const cardSlice = createSlice({
  name: 'counter',
  initialState: {
    cardList: [],
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    setCards: (state, action) => {
      state.cardList = action?.payload;
    },
    addCards: (state, action) => {
      state.cardList = action?.payload;
    },
  },
  // Code logic xử lý async action
  extraReducers: builder => {
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(getCardList.pending, state => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(getCardList.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      console.log('action.payload.data?.cards ', action.payload.data?.cards);
      state.isLoading = false;
      state.cardList = action.payload.data?.cards;
    });

    // Khi thực hiện action login thất bại (Promise rejected)
    builder.addCase(getCardList.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload;
    });

    builder.addCase(addCard.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.cardList = [...state.cardList, action.payload.data?.createCard];
    });

    builder.addCase(deleteCard.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      const id = action.meta.arg;
      state.cardList = [...state.cardList.filter(x => x.id != id)];
    });
  },
});

export const {setCards} = cardSlice.actions;

export default cardSlice.reducer;
