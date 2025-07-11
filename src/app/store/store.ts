import { configureStore } from '@reduxjs/toolkit';
import { myBooksReducer, openlibraryApi } from 'entities/book';
import { userReducer } from 'entities/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    myBooks: myBooksReducer,
    [openlibraryApi.reducerPath]: openlibraryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openlibraryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
