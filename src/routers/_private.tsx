import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { ROUTERS } from 'src/constants/routers';
import { PrivateLayout } from 'src/layouts';
import { ProfileScreen, DashboardScreen, TaskManagementScreen } from 'src/screens/privateScreens';
import NotFoundScreen from 'src/screens/NotFound';

const _privateRoutes: RouteObject[] = [
  {
    element: <PrivateLayout />,
    children: [
      { path: ROUTERS.HOME.PATH, element: <DashboardScreen /> },
      { path: ROUTERS.DASHBOARD.PATH, element: <DashboardScreen /> },
      { path: ROUTERS.TASK_MANAGEMENT.PATH, element: <TaskManagementScreen /> },
      { path: ROUTERS.PROFILE.PATH, element: <ProfileScreen /> },
      { element: <NotFoundScreen />, path: '*' },
    ],
  },
];

export default _privateRoutes;
