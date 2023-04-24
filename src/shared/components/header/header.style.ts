import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 72px;
  width: calc(100% - 240px);
  background-color: #fff;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;

  -webkit-box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.38);
`;

export const LogoExit = styled(LogoutOutlined)`
  font-size: 20px;
`;
