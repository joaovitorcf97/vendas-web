import { RouteObject } from 'react-router-dom';

import Order from './screens/Order';

export enum OrderRoutesEnum {
  ORDER = '/order',
}

export const orderScrens: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: <Order />,
  },
];
