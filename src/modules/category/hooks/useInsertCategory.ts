import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryResucer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { CategoryRoutesEnum } from '../routes';

export const UseInsertCategory = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const { setNotification } = useGlobalReducer();
  const { request } = useRequests();
  const { setCategories } = useCategoryReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [name]);

  const insertCategory = async () => {
    setLoading(true);

    await request(URL_CATEGORY, MethodsEnum.POST, undefined, { name })
      .then(() => {
        setNotification('Sucesso', 'success', 'Categoria inserida com sucesso');
        navigate(CategoryRoutesEnum.CATEGORY);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });

    await request(URL_CATEGORY, MethodsEnum.GET, setCategories);

    setLoading(false);
  };

  const handleaOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return {
    name,
    loading,
    handleaOnChangeName,
    insertCategory,
    disableButton,
  };
};
