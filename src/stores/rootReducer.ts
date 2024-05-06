import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from 'src/stores/app';
import { authReducer } from './screens/publicScreens';

export const reducer = combineReducers({
  app: appReducer,

  auth: authReducer,
});
