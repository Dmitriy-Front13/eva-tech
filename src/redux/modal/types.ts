export interface ModalData {
  title: string;
  isDescription: boolean;
  image: string;
  items: string[];
  oldPrice: number;
  price: number;
  isGift: boolean;
}

export interface ModalSliceState {
  isOpen: boolean;
  modalData: ModalData
}