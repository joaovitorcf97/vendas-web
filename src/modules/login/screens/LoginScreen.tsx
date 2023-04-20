import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import SVGLogo from '../../../shared/icons/SVGLogo';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth/login',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Usuário ou senha inválidos');
      });

    console.log(returnObject);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />

      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary">
            Login
          </TitleLogin>
          <Input
            title="Usuário"
            margin="32px 0px 0px 0px"
            onChange={handleUsername}
            value={email}
          />
          <Input
            type="password"
            title="Senha"
            margin="16px 0px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
