import { createSlice } from '@reduxjs/toolkit';

import { priceConstructorState } from './types';

const initialState: priceConstructorState = {
  carMake: null,
  carModel: null,
  carYear: null,
  carpetColor: '',
  carpetTrim: '',
  set: ''
}

const priceConstructorSlice = createSlice({
  name: 'priceConstructor',
  initialState,
  reducers: {
    updateCarMake: (state, action) => {
      state.carMake = action.payload;
    },
    updateCarModel: (state, action) => {
      state.carModel = action.payload;
    },
    updateCarYear: (state, action) => {
      state.carYear = action.payload;
    },
    updateCarpetColor: (state, action) => {
      state.carpetColor = action.payload;
    },
    updateCarpetTrim: (state, action) => {
      state.carpetTrim = action.payload;
    },
    updateSet: (state, action) => {
      state.set = action.payload;
    },
  }
});

export const {
  updateCarMake,
  updateCarModel,
  updateCarYear,
  updateCarpetColor,
  updateCarpetTrim,
  updateSet
} = priceConstructorSlice.actions;

export default priceConstructorSlice.reducer;
