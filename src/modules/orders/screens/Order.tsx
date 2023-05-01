import { ColumnsType } from 'antd/es/table';

import Screen from '../../../shared/components/screen/screen';
import Table from '../../../shared/components/table/table';
import { OrderType } from '../../../shared/types/orderType';
import { useOrder } from '../hooks/useOrder';

const columns: ColumnsType<OrderType> = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user',
    render: (_, target) => <p>{target.user.name}</p>,
  },
  {
    title: 'Qtd. Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <p>{text}</p>,
  },
];

const Order = () => {
  const { orders } = useOrder();

  return (
    <Screen listBreadcrumb={[{ name: 'HOME' }, { name: 'ORDER' }]}>
      <Table columns={columns} dataSource={orders} size="small" />
    </Screen>
  );
};

export default Order;
