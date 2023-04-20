import { RouteObject } from 'react-router-dom';

import FirtScreen from './screens/firstScreen';

export const firtScreenRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FirtScreen />,
    errorElement: <div>Página não encontrada</div>,
  },
];
