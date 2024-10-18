import { useDispatch } from "react-redux";
import { openModal } from '../../redux/modal/modalSlice';
import { updateSet } from "../../redux/priceConstructor/priceConstructorSlice";
import { updatePrice } from "../../redux/price/priceSlice";
import { AppDispatch } from '../../redux/store';


import footrest from '../../assets/images/footrest.png';

import { Link } from "react-router-dom";

type CardSet = {
  discount: string;
  title: string;
  imageUrl: string;
  totalPrice: number;
  originalPrice: number;
  firstProperty: string;
}

const CardSet: React.FC<CardSet> = ({ discount, title, imageUrl, totalPrice, originalPrice, firstProperty }) => {
  const dispatch = useDispatch<AppDispatch>();
  const openModalMore = () => {
    dispatch(openModal({
      modalData: {
        title: title,
        description: false,
        image: imageUrl,
        items: [firstProperty, 'Warranty 6 months', 'Sewing time 2-4 days', 'Original fasteners + Velcro system', 'Custom fit for your car. All photos are for example'],
        oldPrice: originalPrice,
        price: totalPrice,
        isGift: false,
      }
    }));
  };
  const openModalGift = () => {
    dispatch(openModal({
      modalData: {
        title: 'Footrest',
        description: true,
        image: footrest,
        items: ['size 25x16 cm', 'thickness of 3 mm', 'anti-slip rubber inserts', 'set mounts - 4pcs', 'warranty 6 months'],
        oldPrice: '15',
        price: '0',
        isGift: false,
      }
    }));
  };
  return (
    <div className="constructor-step__card card-step" onClick={openModalMore}>
      <div className="card-step__discount">{discount}</div>
      <h4 className="card-step__title">{title}</h4>
      <a className="card-step__see-more" >see more</a>
      <div className="card-step__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-step__body">
        <a aria-label="See more about the special gift"
          className="card-step__accessory-info"
          onClick={(e) => {
            e.stopPropagation();
            openModalGift();
          }}>
          <i className="icon-present"></i>
          &nbsp;Special gift
        </a>
        <p className="card-step__total-price">
          Total <span className="text-line-through">{originalPrice}$</span> <span>{totalPrice}</span>$
        </p>
      </div>
      <Link to="/order" className="button card-step__button"
        onClick={(e) => { 
          e.stopPropagation();
          dispatch(updateSet(title));
          dispatch(updatePrice({
            product: totalPrice,
            subtotal: totalPrice
          })) 
          }}>
        Select set
      </Link>
    </div>
  );
};

export default CardSet;