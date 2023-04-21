import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import { LoginRoutesEnum } from '../../login/routes';
import { ContainerPageNotFound } from '../styles/pageNotFound.styles';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleOnClickButton = () => {
    navigate(LoginRoutesEnum.LOGIN);
  };

  return (
    <ContainerPageNotFound>
      {' '}
      <Result
        status="404"
        title="Oppps..."
        subTitle="Desculpa, está pagína não existe"
        extra={
          <Button onClick={handleOnClickButton} type="primary">
            Voltar ao inicio
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};

export default PageNotFound;
