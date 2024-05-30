import { get } from 'lodash';

import { AxiosClient } from 'src/configs/axios/axios';

const AUTH_API = {
  loginAPI: async (params: Auth.LoginRequestData) => {
    const response = await new AxiosClient().post('/auth/login', params);

    return response;
  },

  registerAPI: async (params: Auth.LoginRequestData) => {
    const response = await new AxiosClient().post('/auth/register', params);
    const data = get(response, 'data', null);

    return data;
  },

  getMeAPI: async () => {
    const response = await new AxiosClient().get('/auth/me');
    const data = get(response, 'data', null);

    return data;
  },

  logoutAPI: async () => {
    const response = await new AxiosClient().post('/auth/logout');

    return response;
  },
};

export default AUTH_API;
