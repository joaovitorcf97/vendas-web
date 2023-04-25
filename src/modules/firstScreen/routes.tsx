import { RouteObject } from 'react-router-dom';

import FirtScreen from './screens/firstScreen';
import PageNotFound from './screens/PageNotFound';

export enum FirstScreenRoutesEnum {
  FIRST_SCREEN = '/',
}

export const firtScreenRoutes: RouteObject[] = [
  {
    path: FirstScreenRoutesEnum.FIRST_SCREEN,
    element: <FirtScreen />,
    errorElement: <PageNotFound />,
  },
];
