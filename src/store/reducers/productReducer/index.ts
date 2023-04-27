import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '../../../shared/types/ProductType';

interface ProductState {
  products: ProductType[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductAction } = productSlice.actions;

export default productSlice.reducer;
