import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuhtorizationToken } from '../../../shared/functions/connections/auth';
import { LoginRoutesEnum } from '../../login/routes';
import { ProductRoutesEnum } from '../../product/routes';

const FirtScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getAuhtorizationToken();
    if (token) {
      navigate(ProductRoutesEnum.PRODUCT);
    } else {
      navigate(LoginRoutesEnum.LOGIN);
    }
  }, []);
  return <Spin />;
};

export default FirtScreen;
