import { useEffect, useState } from 'react';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryResucer';

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const [categoryFiltered, setCategoryFiltered] = useState(categories);
  const { request } = useRequests();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  useEffect(() => {
    setCategoryFiltered([...categories]);
  }, [categories]);

  const handleOnChangeSearch = (value: string) => {
    if (!value) {
      setCategoryFiltered([...categories]);
    } else {
      setCategoryFiltered([
        ...categoryFiltered.filter((category) =>
          category.name.toUpperCase().includes(value.toUpperCase()),
        ),
      ]);
    }
  };

  return {
    categories: categoryFiltered,
    handleOnChangeSearch,
  };
};
