import {
  HomeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductRoutesEnum } from '../../../modules/product/routes';
import { CompanyName, ContainerLogoName, ContainerMenu, LogoMenu } from './menu.style';

type MenuItem = Required<MenuProps>['items'][number];

const Menu = () => {
  const [current, setCurrent] = useState('1');
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      key: 'home',
      label: 'Principal',
      icon: <HomeOutlined />,
    },
    {
      key: 'products',
      label: 'Produtos',
      icon: <LaptopOutlined />,
      children: [
        {
          key: 'products_view',
          label: 'Visualizar',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: 'products_insert',
          label: 'Inserir',
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: 'category',
      label: 'Categorias',
      icon: <ProfileOutlined />,
      children: [
        {
          key: 'category_view',
          label: 'Visualizar',
          // onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: 'category_insert',
          label: 'Inserir',
          //onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: 'order',
      label: 'Pedidos',
      icon: <SafetyCertificateOutlined />,
      //onClick: () => navigate(ProductRoutesEnum.PRODUCT),
    },
    {
      key: 'user',
      label: 'Clientes',
      icon: <UserOutlined />,
      //onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <ContainerMenu>
      <ContainerLogoName>
        <LogoMenu />
        <CompanyName>Vendas Online</CompanyName>
      </ContainerLogoName>
      <MenuAntd
        theme="dark"
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
