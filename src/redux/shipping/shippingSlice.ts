import { createSlice } from '@reduxjs/toolkit';

import { ShippingState } from './types';

const initialState: ShippingState = {
  postalCode: '',
  shippingPrice: null,
};

const shippingSlice = createSlice({
  name: 'shipping',
  initialState: initialState,
  reducers: {
    updateShipping: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateShipping } = shippingSlice.actions;

export default shippingSlice.reducer;