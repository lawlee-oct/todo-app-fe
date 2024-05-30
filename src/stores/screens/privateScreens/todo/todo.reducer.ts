import { createSlice } from '@reduxjs/toolkit';

import { getTodosAction } from './todo.action';

const initialState: TaskManagement.InitialValuesReducer = {
  isLoading: false,
  error: null,
  todos: null,
};

const { actions, reducer } = createSlice({
  name: 'auth_slice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTodosAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodosAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(getTodosAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { reducer };
export default actions;
