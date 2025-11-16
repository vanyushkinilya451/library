import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "shared/lib";

export type UserProfile = {
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: string;
  patronymic: string;
};

type UserState = {
  user: User | null;
  session: Session | null;
  error: string;
  profile: UserProfile | null;
  isLoading: boolean;
};

const initialState: UserState = {
  user: null,
  session: null,
  error: "",
  isLoading: false,
  profile: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userCredentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { error, data } = await supabase.auth.signUp({
        email: userCredentials.email,
        password: userCredentials.password,
      });

      if (error) {
        return thunkAPI.rejectWithValue(error);
      }

      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userCredentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email: userCredentials.email,
        password: userCredentials.password,
      });

      if (error) {
        return thunkAPI.rejectWithValue(error);
      }

      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
});

export const getUserAndSession = createAsyncThunk(
  "auth/getUserAndSession",
  async (_, thunkAPI) => {
    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();

      if (userError) {
        return thunkAPI.rejectWithValue(userError);
      }

      if (sessionError) {
        return thunkAPI.rejectWithValue(sessionError);
      }

      return { userData, sessionData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (userId: string, thunkApi) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        return thunkApi.rejectWithValue(error);
      }
      return { data };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.session = action.payload.data.session;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message || "Произошла ошибка при регистрации";
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.session = action.payload.data.session;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message || "Произошла ошибка при входе";
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.session = null;
      state.isLoading = false;
      state.profile = null;
      state.error = "";
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message || "Произошла ошибка при выходе";
      state.profile = null;
      state.error = "";
      state.profile = null;
    });
    builder.addCase(getUserAndSession.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserAndSession.fulfilled, (state, action) => {
      state.user = action.payload.userData.user;
      state.session = action.payload.sessionData.session;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(getUserAndSession.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        action.error?.message ||
        "Произошла ошибка при получении пользователя и сессии";
    });
    builder.addCase(getUserProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload.data[0];
      state.error = "";
      state.isLoading = false;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.profile = null;
      state.error =
        action.error?.message || "Произошла ошибка при получении профиля";
    });
  },
});

export const userReducer = userSlice.reducer;
