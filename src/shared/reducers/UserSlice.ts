import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session, User } from '@supabase/supabase-js';

type UserState = {
  user: User | null;
  session: Session | null;
};

const initialState: UserState = {
  user: null,
  session: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.session = action.payload.session;
    },
  },
  extraReducers: () => {},
});

export default userSlice.reducer;
