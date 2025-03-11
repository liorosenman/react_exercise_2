import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store.ts';
import { fetchProds } from './counterAPI.ts';
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

export const getProds = createAsyncThunk(
  'product/fetchProds',
  async () => {
    const response = await fetchProds();
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
   
  },
  extraReducers: (builder) => {
    builder.addCase(getProds.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});


export const { setProducts} = productsSlice.actions;
export const selectProds = (state: RootState) => state.products;
export default productsSlice.reducer;


