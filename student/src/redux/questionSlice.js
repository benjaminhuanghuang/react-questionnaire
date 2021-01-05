import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    currentQuestion: null,
  },
  reducers: {
    selectQuestion: (state, action) => {
      state.currentQuestion = action.payload
    }
  },
});

export const { selectQuestion } = questionSlice.actions;

export const selectCurrentQuestion = state => state.mail.currentQuestion;

export default questionSlice.reducer;
