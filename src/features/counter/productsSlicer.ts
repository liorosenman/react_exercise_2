import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store.ts';
import { fetchProducts } from './productAPI.ts';
import { Product } from './Product.ts';
import { useAppSelector } from '../../app/hooks.ts';
import React from 'react';

export interface CounterState {
  // map(arg0: (prod: any) => JSX.Element): import("react").ReactNode;
  products: Product[];
}

export const initialState: CounterState = {
  products : []
};

export const loadProducts = createAsyncThunk("products/load", fetchProducts);

// export const getProds = createAsyncThunk(
//   'products/load',
//   async () => {
//     const response = await fetchProducts();
//     return response.data;
//   }
// );

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(loadProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;

    });
  },
});


// export const { setProducts} = productsSlice.actions;
export const selectProds = (state: RootState) => state.products;
export default productsSlice.reducer;


