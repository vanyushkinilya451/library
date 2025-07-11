import { configureStore } from '@reduxjs/toolkit';
import { openlibraryApi, supabaseApi } from 'entities/book';
import { userReducer } from 'entities/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [openlibraryApi.reducerPath]: openlibraryApi.reducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(openlibraryApi.middleware)
      .concat(supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
