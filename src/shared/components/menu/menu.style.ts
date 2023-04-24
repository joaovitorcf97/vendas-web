import { Typography } from 'antd';
import styled from 'styled-components';

import SVGLogo from '../icons/SVGLogo';

const { Text } = Typography;

export const ContainerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background-color: #14253d;
`;

export const ContainerLogoName = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;

  -webkit-box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.5);
`;

export const LogoMenu = styled(SVGLogo)`
  width: 50px;
  height: 50px;
  margin: 0px 16px;
`;

export const CompanyName = styled(Text)`
  color: #fff;
  font-size: 18px;
`;
