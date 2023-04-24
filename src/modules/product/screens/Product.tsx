import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
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
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnclickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  return (
    <Screen
      listBreadcrumb={[
        { name: 'HOME' },
        {
          name: 'Produtos',
        },
      ]}
    >
      <Button onClick={handleOnclickInsert} type="primary">
        Inserir
      </Button>
      <Table columns={columns} dataSource={products} />
    </Screen>
  );
};

export default Product;
