import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { FirstScreenRoutesEnum } from '../../modules/firstScreen/routes';
import { AuthType } from '../../modules/login/types/AuthType';
import { ERROR_ENVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationtoken } from '../functions/connections/auth';
import ConnectionAPI, {
  connnetionAPIPost,
  MethodType,
} from '../functions/connections/connectionAPI.';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }

        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);

    return returnObject;
  };

  const authRequest = async (navigate: NavigateFunction, body: unknown): Promise<void> => {
    setLoading(true);

    await connnetionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setNotification('Logado com sucesso', 'success');
        setUser(result.user);
        setAuthorizationtoken(result.accessToken);
        navigate(FirstScreenRoutesEnum.FIRST_SCREEN);

        return result;
      })
      .catch(() => {
        setNotification(ERROR_ENVALID_PASSWORD, 'error');

        return undefined;
      });

    setLoading(false);
  };

  return {
    loading,
    request,
    authRequest,
  };
};
