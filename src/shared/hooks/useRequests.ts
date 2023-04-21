import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/product/routes';
import { ERROR_ENVALID_PASSWORD } from '../constants/errosStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationtoken } from '../functions/connections/auth';
import { connnetionAPIPost } from '../functions/connections/connectionAPI.';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setNotification, setUser } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });
  };

  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true);
    const returnData = await connnetionAPIPost<T>(url, body)
      .then((result) => {
        setNotification('Logado com sucesso', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);
    return returnData;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);

    await connnetionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setNotification('Logado com sucesso', 'success');
        setUser(result.user);
        setAuthorizationtoken(result.accessToken);
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch(() => {
        setNotification(ERROR_ENVALID_PASSWORD, 'error');
      });

    setLoading(false);
  };

  return {
    loading,
    getRequest,
    postRequest,
    authRequest,
  };
};
