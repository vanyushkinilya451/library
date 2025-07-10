import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from 'shared/lib';

type UserState = {
  user: User | null;
  session: Session | null;
  error: string;
  isLoading: boolean;
};

const initialState: UserState = {
  user: null,
  session: null,
  error: '',
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userCredentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { error, data } = await supabase.auth.signUp({
        email: userCredentials.email,
        password: userCredentials.password,
      });

      if (error) {
        return thunkAPI.rejectWithValue(error);
      }

      return { error, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email: userCredentials.email,
        password: userCredentials.password,
      });

      if (error) {
        return thunkAPI.rejectWithValue(error);
      }

      return { error, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
});

export const getUserAndSession = createAsyncThunk(
  'auth/getUserAndSession',
  async (_, thunkAPI) => {
    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      return { userData, userError, sessionData, sessionError };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.user = action.payload.user;
      state.session = action.payload.session;
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.session = action.payload.data.session;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message || 'Произошла ошибка при регистрации';
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.session = action.payload.data.session;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message || 'Произошла ошибка при входе';
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.session = null;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message || 'Произошла ошибка при выходе';
    });
    builder.addCase(getUserAndSession.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserAndSession.fulfilled, (state, action) => {
      state.user = action.payload.userData.user;
      state.session = action.payload.sessionData.session;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(getUserAndSession.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        action.error?.message ||
        'Произошла ошибка при получении пользователя и сессии';
    });
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
