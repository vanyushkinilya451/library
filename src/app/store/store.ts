import { configureStore } from '@reduxjs/toolkit';
import { myBooksReducer } from 'entities/book';
import { userReducer } from 'entities/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    myBooks: myBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
