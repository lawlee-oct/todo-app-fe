import React, { useEffect, useState } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import styled from 'styled-components';
import { Spin } from 'antd';

import _publicRoutes from './_public';
import _privateRoutes from './_private';
import { LOCAL_STORAGE_KEY } from 'src/constants';
import { useAppSelector } from 'src/stores';
import { ROUTERS } from 'src/constants/routers';

const RootRouter: React.FC = () => {
  const navigate = useNavigate();

  const { isLoading, error } = useAppSelector(state => state.auth);
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  const token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) as string;

  useEffect(() => {
    if (token) {
      setRoutes([..._privateRoutes]);
    } else {
      navigate(ROUTERS.LOGIN.PATH);
      setRoutes([..._publicRoutes]);
    }
  }, [token]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
      navigate('/login');
    }
  }, [error]);

  return (
    <SpinStyle spinning={isLoading} wrapperClassName="root-spin" className="root-spin-component" tip="Loading...">
      {useRoutes(routes)}
    </SpinStyle>
  );
};

export default RootRouter;

const SpinStyle = styled(Spin)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
