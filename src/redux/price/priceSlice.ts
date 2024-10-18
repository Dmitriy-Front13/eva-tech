import { createSlice } from '@reduxjs/toolkit';
import { PriceState } from './types';


const initialState: PriceState = {
  product: null,
  subtotal: null,
  total: null
};

const priceSlice = createSlice({
  name: 'price',
  initialState: initialState,
  reducers: {
    updatePrice: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updatePrice } = priceSlice.actions;

export default priceSlice.reducer;