import { useEffect, useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Select from '../../../shared/components/inputs/select/select';
import Screen from '../../../shared/components/screen/screen';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProduct } from '../../../shared/dtos/insertProduct.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { connnetionAPIPost } from '../../../shared/functions/connections/connectionAPI.';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRoutesEnum } from '../routes';
import { LimitedContainer } from '../styles/productInsert.style';

const ProductInsert = () => {
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
  });
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, nameObject: string) => {
    setProduct({
      ...product,
      [nameObject]: event.target.value,
    });
  };

  const onChagePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      price: Number(event.target.value),
    });
  };

  const handleChange = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const handleInsertProduct = () => {
    connnetionAPIPost(URL_PRODUCT, product);
    console.log(product);
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
      <LimitedContainer>
        <Input
          onChange={(event) => onChange(event, 'name')}
          value={product.name}
          margin="0px 0px 16px 0px"
          title="Nome"
          placeholder="Nome"
        />
        <Input
          onChange={(event) => onChange(event, 'image')}
          value={product.image}
          margin="0px 0px 16px 0px"
          title="Image"
          placeholder="Image"
        />
        <Input
          onChange={onChagePrice}
          value={product.price}
          margin="0px 0px 16px 0px"
          title="Preço"
          placeholder="Preço"
        />
        <Select
          title="Categoria"
          onChange={handleChange}
          margin="0px 0px 32px 0px"
          options={categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`,
          }))}
        />
        <Button onClick={handleInsertProduct} type="primary">
          Inserir Produto
        </Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
