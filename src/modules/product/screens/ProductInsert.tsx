import Screen from '../../../shared/components/screen/screen';
import { ProductRoutesEnum } from '../routes';

const ProductInsert = () => {
  return (
    <Screen
      listBreadcrumb={[
        { name: 'HOME' },
        {
          name: 'Produtos',
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: 'Inserir Produto',
        },
      ]}
    >
      Inserir produto
    </Screen>
  );
};

export default ProductInsert;
