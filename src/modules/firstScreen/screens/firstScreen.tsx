import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import {
  getAuhtorizationToken,
  unsetAuhtorizationToken,
} from '../../../shared/functions/connections/auth';
import { connnetionAPIGet } from '../../../shared/functions/connections/connectionAPI.';
import { LoginRoutesEnum } from '../../login/routes';
import { ProductRoutesEnum } from '../../product/routes';

const FirtScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuhtorizationToken();
      if (token) {
        await connnetionAPIGet(URL_USER)
          .then(() => {
            navigate(ProductRoutesEnum.PRODUCT);
          })
          .catch(() => {
            unsetAuhtorizationToken();
            navigate(LoginRoutesEnum.LOGIN);
          });
      } else {
        navigate(LoginRoutesEnum.LOGIN);
      }
    };

    verifyToken();
  }, []);
  return <Spin />;
};

export default FirtScreen;
