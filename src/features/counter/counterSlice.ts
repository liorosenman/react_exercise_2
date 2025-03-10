import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { fetchProds } from './counterAPI.ts';
import { Product } from './Product';

export interface CounterState {
  products: Product[];
}

export const initialState: CounterState = {
  products : []
};

export const getProds = createAsyncThunk(
  'counter/fetchProd',
  async () => {
    const response = await fetchProds();
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
   
  },
  extraReducers: (builder) => {
    builder.addCase(getProds.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Export actions
export const { setProducts} = productsSlice.actions;

// Async thunk action
// Selector
export const selectProds = (state) => state.products;

// Export reducer
export default productsSlice.reducer;

