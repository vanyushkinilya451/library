import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MyBooksState = {
  myBooks: string[] | null;
};

const initialState: MyBooksState = {
  myBooks: null,
};

export const myBooksSlice = createSlice({
  name: 'myBooks',
  initialState,
  reducers: {
    setMyBooks(state, action: PayloadAction<MyBooksState>) {
      state.myBooks = action.payload.myBooks;
    },
  },
});

export default myBooksSlice.reducer;
