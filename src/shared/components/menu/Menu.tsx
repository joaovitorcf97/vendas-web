import { CompanyName, ContainerLogoName, ContainerMenu, LogoMenu } from './menu.style';

const Menu = () => {
  return (
    <ContainerMenu>
      <ContainerLogoName>
        <LogoMenu />
        <CompanyName>Vendas Online</CompanyName>
      </ContainerLogoName>
    </ContainerMenu>
  );
};

export default Menu;
