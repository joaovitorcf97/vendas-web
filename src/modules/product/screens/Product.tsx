import { Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/screen';
import Table from '../../../shared/components/table/table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import BoxImage from '../components/BoxImage';
import Categorycolumn from '../components/CategoryColumn';
import { ProductRoutesEnum } from '../routes';
import { BoxButtons, LimitedSizeButton, LimitedSizeInput } from '../styles/product.style';

const { Search } = Input;

const columns: ColumnsType<ProductType> = [
  {
    title: 'Images',
    dataIndex: 'image',
    key: 'image',
    render: (_, product) => <BoxImage product={product} />,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (_, product) => <Categorycolumn category={product.category} />,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setProductsFiltered([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnclickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  const onSearch = (value: string) => {
    if (!value) {
      setProductsFiltered([...products]);
    } else {
      setProductsFiltered([...productsFiltered.filter((product) => product.name.includes(value))]);
    }
  };

  return (
    <Screen listBreadcrumb={[{ name: 'HOME' }, { name: 'Produtos' }]}>
      <BoxButtons>
        <LimitedSizeInput>
          <Search placeholder="Buscar produto" onSearch={onSearch} enterButton />
        </LimitedSizeInput>

        <LimitedSizeButton>
          <Button onClick={handleOnclickInsert} type="primary">
            Inserir
          </Button>
        </LimitedSizeButton>
      </BoxButtons>

      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;
