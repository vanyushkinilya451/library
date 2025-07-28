import { createSlice } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

const storedTheme = localStorage.getItem('theme');

const initialState: Theme =
  storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light';

export const themeSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state === 'light' ? (state = 'dark') : (state = 'light');
    },
  },
});

export const themeReducer = themeSlice.reducer;
