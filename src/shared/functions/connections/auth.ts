import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { getItemStorate, removeItemStorate, setItemStorate } from './storageProxy';

export const unsetAuhtorizationToken = () => removeItemStorate(AUTHORIZATION_KEY);
export const setAuthorizationtoken = (token: string) => {
  if (token) {
    setItemStorate(AUTHORIZATION_KEY, token);
  }
};
export const getAuhtorizationToken = () => getItemStorate(AUTHORIZATION_KEY);
