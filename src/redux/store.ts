import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';
import priceConstructorReducer from './priceConstructor/priceConstructorSlice';
import priceReducer from './price/priceSlice';
import promoReducer from './promo/promoSlice';
import shippingReducer from './shipping/shippingSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    priceConstructor: priceConstructorReducer,
    price: priceReducer,
    promo: promoReducer,
    shipping: shippingReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store; 