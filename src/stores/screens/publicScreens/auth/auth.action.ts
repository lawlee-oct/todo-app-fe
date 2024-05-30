import { createAsyncThunk } from '@reduxjs/toolkit';

import AUTH_API from './auth.api';
import { LOCAL_STORAGE_KEY } from 'src/constants';
import { notification } from 'antd';

export const loginAction = createAsyncThunk<any, Auth.LoginRequestPayload>(
  'auth',
  async ({ data, callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const user: any = await AUTH_API.loginAPI(data);

      if (user?.access_token) {
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, user.access_token);

        callback();
      }

      notification.success({ message: user?.message });

      return user;
    } catch (err: any) {
      notification.error({ message: err?.message });

      rejectWithValue(err?.response?.data || err?.name);
    }
  },
);

export const getMeAction = createAsyncThunk<any>('me', async (_, { dispatch, rejectWithValue }) => {
  try {
    const res = await AUTH_API.getMeAPI();

    return res;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

export const logoutAction = createAsyncThunk<any, any>(
  'logout',
  async ({ callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const res = await AUTH_API.logoutAPI();

      if (res) {
        callback();
      }

      return res;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);
