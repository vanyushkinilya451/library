import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme");

const initialState = storedTheme ?? "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
