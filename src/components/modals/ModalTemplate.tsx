import Modal from 'react-modal';

import { ModalData } from '../../redux/modal/types';
import ok from '../../assets/images/comparison-ok.png';

import './modal.scss';

interface ModalTemplate extends ModalData {
  modalOpen: boolean;
  setModalOpen: () => void;
}

const ModalTemplate: React.FC<ModalTemplate> = ({ modalOpen, setModalOpen, title, isDescription, image, items, oldPrice, price, isGift }) => {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={setModalOpen}
      className="modal"
      overlayClassName="modal-overlay"
      overlayElement={
        (props, contentElement) => <div {...props}>
          <button className="modal__close">
            <span className='modal__closeIcon'>
              <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#fff" fill-rule="nonzero"></path></svg>
            </span>
            <span className="modal__closeLabel">Close</span>
          </button>
          {contentElement}
        </div>}>
      <h2 className="modal__title">{title}</h2>
      {isDescription && <p className="text modal__text">Designed to to protect the driver's mat from being pierced
        or damaged, by the heel of a shoe. They are located close to
        the accelerator pedal and the foot rest area.</p>}
      <div className="modal__items">
        <div className={`modal__image ${isDescription ? 'modal__image--gift' : ''}`}>
          <img src={image} alt={title} />
        </div>
        <ul className="property-list text">
          {items.map((item, index) => (
            <li className='property-list__item' key={index}>
              <img className="card-comparison__icon"
                src={ok} alt="Okay" />
              {item}
            </li>
          ))}
          <h3 className="modal__title">Price: <span className="text-line-through">{oldPrice} $</span> {price}$</h3>
        </ul>
      </div>

      {isGift && <button className="shopNow-btn" onClick={setModalOpen}>
        <a href="#price-constructor">Shop now</a>
      </button>}
    </Modal>

  )
}

export default ModalTemplate;