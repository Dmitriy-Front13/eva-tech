import { createSlice } from '@reduxjs/toolkit';
import { PromoState } from './types';

const initialState: PromoState = {
  usePromo: false,
  discount: 0,
  promoValue: '',
};

const promoSlice = createSlice({
  name: 'promo',
  initialState: initialState,
  reducers: {
    updatePromo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updatePromo } = promoSlice.actions;

export default promoSlice.reducer;