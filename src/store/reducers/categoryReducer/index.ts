import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryType } from '../../../shared/types/categoryType';

interface CategoryState {
  categories: CategoryType[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'categoryReducer',
  initialState,
  reducers: {
    setCategoriesAction: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategoriesAction } = categorySlice.actions;

export default categorySlice.reducer;
