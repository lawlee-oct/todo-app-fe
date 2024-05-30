import { createAsyncThunk } from '@reduxjs/toolkit';

import AUTH_API from './todo.api';
import { notification } from 'antd';

export const getTodosAction = createAsyncThunk<any>('todos', async (_, { dispatch, rejectWithValue }) => {
  try {
    const res = await AUTH_API.getTodos();

    return res;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

export const createTodoActions = createAsyncThunk<any, any>(
  'create_todo',
  async ({ data, callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const res: any = await AUTH_API.createTodoAPI(data);

      if (res?.code === 200) {
        await callback();
        notification.success({ message: 'Create Todo Successfully!' });
      }

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

export const deleteTodoActions = createAsyncThunk<any, any>(
  'delete_todo',
  async ({ id, callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const res: any = await AUTH_API.deleteTodoAPI(id);

      if (res) {
        await callback();

        notification.success({ message: 'Delete Todo Successfully!' });
      }

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

export const updateTodoActions = createAsyncThunk<any, any>(
  'update_todo',
  async ({ id, data, callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const res: any = await AUTH_API.updateTodoAPI(id, data);

      if (res) {
        await callback();

        notification.success({ message: 'Update Todo Successfully!' });
      }

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);
