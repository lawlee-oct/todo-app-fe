import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { ROUTERS } from 'src/constants/routers';
import { PublicLayout } from 'src/layouts';
import { LoginScreen } from 'src/screens/publicScreens';
import NotFoundScreen from 'src/screens/NotFound';

const _publicRoutes: RouteObject[] = [
  {
    path: ROUTERS.HOME.PATH,
    element: <PublicLayout />,
    children: [
      { path: ROUTERS.LOGIN.PATH, element: <LoginScreen /> },
      { path: ROUTERS.LOGIN.PATH, element: <LoginScreen /> },
    ],
  },
  { element: <NotFoundScreen />, path: '*' },
];

export default _publicRoutes;
