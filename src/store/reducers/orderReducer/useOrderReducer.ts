import { useDispatch } from 'react-redux';

import { OrderType } from '../../../shared/types/orderType';
import { useAppSelector } from '../../hooks';
import { setOrdersAction } from '.';

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders } = useAppSelector((state) => state.orderReducer);

  const setOrders = (orders: OrderType[]) => {
    dispatch(setOrdersAction(orders));
  };

  return {
    orders,
    setOrders,
  };
};
