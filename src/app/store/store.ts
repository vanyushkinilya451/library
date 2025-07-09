import { configureStore } from '@reduxjs/toolkit';
import { myBooksReducer, userReducer } from 'shared/reducers';

export const store = configureStore({
  reducer: {
    user: userReducer,
    myBooks: myBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
