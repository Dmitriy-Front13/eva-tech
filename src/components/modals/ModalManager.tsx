import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice';
import ModalTemplate from './ModalTemplate';
import { RootState, AppDispatch } from '../../redux/store';

const ModalManager = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, modalData } = useSelector((state: RootState) => state.modal);

  if (!isOpen) return null;

  return (
    <ModalTemplate
      modalOpen={isOpen}
      setModalOpen={() => dispatch(closeModal())}
      title={modalData.title}
      isDescription={modalData.isDescription}
      image={modalData.image}
      items={modalData.items}
      oldPrice={modalData.oldPrice}
      price={modalData.price}
      isGift={modalData.isGift}
    />
  );
};

export default ModalManager;