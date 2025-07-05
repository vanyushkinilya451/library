import { configureStore } from '@reduxjs/toolkit';
import { myBooksReducer, sessionReducer, userReducer } from 'shared/reducers';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
    myBooks: myBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
