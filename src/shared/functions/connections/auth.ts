import { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/urls';
import { connnetionAPIGet } from './connectionAPI.';
import { getItemStorate, removeItemStorate, setItemStorate } from './storageProxy';

export const unsetAuhtorizationToken = () => removeItemStorate(AUTHORIZATION_KEY);

export const setAuthorizationtoken = (token: string) => {
  if (token) {
    setItemStorate(AUTHORIZATION_KEY, token);
  }
};

export const getAuhtorizationToken = () => getItemStorate(AUTHORIZATION_KEY);

export const verifyLoggedIn = async () => {
  const token = getAuhtorizationToken();
  if (!token) {
    location.href = '/login';
  }

  await connnetionAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuhtorizationToken();
    location.href = '/login';
  });

  return null;
};
