import { createSlice } from '@reduxjs/toolkit';

import { ModalSliceState, ModalData } from './types';

const initialModalData = {
  title: '',
  isDescription: false,
  image: '',
  items: [],
  oldPrice: 0,
  price: 0,
  isGift: false,
};


const initialState: ModalSliceState = {
  isOpen: false,
  modalData: initialModalData
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalData = action.payload.modalData;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalData = initialModalData;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;