import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProduct } from '../../../shared/dtos/insertProduct.dto';
import { connnetionAPIPost } from '../../../shared/functions/connections/connectionAPI.';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { ProductRoutesEnum } from '../routes';

export const useInsertProduct = () => {
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
  });
  const [loadind, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (product.name && product.categoryId && product.image && product.price > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [product]);

  const handleInsertProduct = async () => {
    setLoading(true);
    await connnetionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Sucesso', 'success', 'Produto inserido com sucesso');
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
    setLoading(false);
  };

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const handleChangeSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  return {
    product,
    loadind,
    disableButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
  };
};
