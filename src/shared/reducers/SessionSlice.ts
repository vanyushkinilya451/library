import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session } from '@supabase/supabase-js';

type SessionState = {
  session: Session | null;
};

const initialState: SessionState = {
  session: null,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<SessionState>) {
      state.session = action.payload.session;
    },
  },
});

export default sessionSlice.reducer;
