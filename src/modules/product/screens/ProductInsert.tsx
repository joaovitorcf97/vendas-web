import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/select';
import Screen from '../../../shared/components/screen/screen';
import { DisplayFlexJustifyRight } from '../../../shared/components/styles/display.styled';
import { LimitedContainer } from '../../../shared/components/styles/limeted.styled';
import { useCategory } from '../../category/hooks/useCategory';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRoutesEnum } from '../routes';
import { ProductInsertContainer } from '../styles/productInsert.style';

const ProductInsert = () => {
  const {
    loadind,
    onChangeInput,
    handleChangeSelect,
    product,
    handleInsertProduct,
    disableButton,
  } = useInsertProduct();
  const { categories } = useCategory();

  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

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
      <ProductInsertContainer>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => onChangeInput(event, 'name')}
            value={product.name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            onChange={(event) => onChangeInput(event, 'image')}
            value={product.image}
            margin="0px 0px 16px 0px"
            title="Image"
            placeholder="Image"
          />
          <InputMoney
            onChange={(event) => onChangeInput(event, 'price', true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
          />
          <Select
            title="Categoria"
            onChange={handleChangeSelect}
            margin="0px 0px 32px 0px"
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button
                loading={loadind}
                disabled={disableButton}
                onClick={handleInsertProduct}
                type="primary"
              >
                Inserir Produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;
