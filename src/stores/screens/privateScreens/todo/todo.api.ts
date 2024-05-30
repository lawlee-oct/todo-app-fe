import { get } from 'lodash';

import { AxiosClient } from 'src/configs/axios/axios';

const AUTH_API = {
  getTodos: async () => {
    const response = await new AxiosClient().get('/todo');
    const data = get(response, 'data', null);

    return data;
  },

  createTodoAPI: async (params: any) => {
    const response = await new AxiosClient().post('/todo/create', params);

    return response;
  },

  deleteTodoAPI: async (id: string | number) => {
    const response = await new AxiosClient().delete(`/todo/delete/${id}`);

    return response;
  },

  updateTodoAPI: async (id: string | number, params: any) => {
    const response = await new AxiosClient().patch(`/todo/update/${id}`, params);

    return response;
  },
};

export default AUTH_API;
