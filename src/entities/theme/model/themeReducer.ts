import { createSlice } from '@reduxjs/toolkit';
import { CONSTANTS } from 'shared/lib';

type Theme = (typeof CONSTANTS.THEMES)[keyof typeof CONSTANTS.THEMES];

const storedTheme = localStorage.getItem('theme');

const initialState: Theme =
  storedTheme && storedTheme in CONSTANTS.THEMES ? storedTheme : 'light';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state === 'light' ? (state = 'dark') : (state = 'light');
    },
  },
});
