import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { createProduct, fetchProducts, updateProd } from './productAPI.ts';
import { Product } from './Product.ts';
import { useAppSelector } from '../../app/hooks.ts';
import React from 'react';

export interface CounterState {
  // map(arg0: (prod: any) => JSX.Element): import("react").ReactNode;
  products: Product[];
  current_id: number
}

export const initialState: CounterState = {
  products: [],
  current_id: 1
};

// export const loadProducts = createAsyncThunk("products/load", fetchProducts);

export const getProds = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    return await fetchProducts();
  }
);

export const createProd = createAsyncThunk<Product, Product>(
  'products/createProduct',
  async (product: Product) => {
    const response = await createProduct(product);
    return response
  }
);

export const updProd = createAsyncThunk<Product, { id: number; updatedprod: Product }>(
  'products/updateProd',
  async ({ id, updatedprod }) => {
    console.log(id)
  const response = await updateProd(id, updatedprod);
  return response
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProds.fulfilled, (state, action) => {
        state.products = (action.payload);
      })
      .addCase(createProd.fulfilled, (state, action) => {
        const newProduct = {
          ...action.payload,
          id: state.current_id++, 
        };
        state.products.push(newProduct);
      })
      .addCase(updProd.fulfilled, (state, action) => {
        const index = state.products.findIndex(prod => prod.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
  }})

  }
});




// export const { setProducts} = productsSlice.actions;
export const selectProds = (state: RootState) => state.products.products;
export default productsSlice.reducer;


