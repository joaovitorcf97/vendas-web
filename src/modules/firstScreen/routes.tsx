import { RouteObject } from 'react-router-dom';

import FirtScreen from './screens/firstScreen';
import PageNotFound from './screens/PageNotFound';

export const firtScreenRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FirtScreen />,
    errorElement: <PageNotFound />,
  },
];
