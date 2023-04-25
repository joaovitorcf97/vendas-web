import Search from 'antd/es/input/Search';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/screen';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limeted.styled';
import Table from '../../../shared/components/table/table';
import { CategoryType } from '../../../shared/types/categoryType';
import { useCategory } from '../hooks/useCategory';
import { CategoryRoutesEnum } from '../routes';

const columns: ColumnsType<CategoryType> = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Produtos',
    dataIndex: 'amountProducts',
    key: 'products',
    render: (text) => <p>{text}</p>,
  },
];

const Category = () => {
  const { categories } = useCategory();
  const navigate = useNavigate();

  const handleInsertCategory = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  };

  const handleOnSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Screen listBreadcrumb={[{ name: 'HOME' }, { name: 'Produtos' }]}>
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={240}>
          <Search placeholder="Buscar produto" onSearch={handleOnSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={120}>
          <Button onClick={handleInsertCategory} type="primary">
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={categories} size="small" />
    </Screen>
  );
};

export default Category;
