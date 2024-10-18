import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useSelector } from 'react-redux';

import './orderSummary.scss';

const OrderSummary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const animation = useSpring({
    height: isOpen ? contentRef.current.scrollHeight : 0,
    overflow: 'hidden'
  });

  const carMake = useSelector((state) => state.priceConstructor.carMake.label);
  const carModel = useSelector((state) => state.priceConstructor.carModel.label);
  const carYear = useSelector((state) => state.priceConstructor.carYear.label);
  const set = useSelector((state) => state.priceConstructor.set);
  const carpetColor = useSelector((state) => state.priceConstructor.carpetColor);
  const carpetTrim = useSelector((state) => state.priceConstructor.carpetTrim);
  const price = useSelector((state) => state.priceConstructor.price.product)

  const getImageSrc = () => {
    switch (set) {
      case 'Standart':
        return require('../../assets/images/priceConstructor/sets/set-2.jpg');
      case 'Economy':
        return require('../../assets/images/priceConstructor/sets/set-1.jpg');
      case 'Premium':
        return require('../../assets/images/priceConstructor/sets/set-3.jpg');
      default:
        return require('../../assets/images/priceConstructor/sets/set-3.jpg');
    }
  };
  return (
    <div className="order-summary">
      <div className="order-summary__box" onClick={() => setIsOpen(!isOpen)}>
        <p className="order-summary__title">
          View order details
          <svg className='order-summary__title-arrow' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.40051L5.96734 7.00272L6.00006 6.97063L6.031 7.00097L12 1.40051L10.5718 0.000421405L5.99867 4.2912L1.42778 0L0 1.40051Z" fill="black" />
          </svg>
        </p>
        <span className="order-summary__price">{price}$</span>
      </div>
      <animated.div style={animation} ref={contentRef} >
        <div className="order-summary__inner">
          <div className="order-summary__img-box">
            <img src={getImageSrc()} alt="img set" />
          </div>
          <ul className="order-summary__list">
            <li className="order-summary__item">
              Car make
              <span className="order-summary__item-info">{carMake}</span>
            </li>
            <li className="order-summary__item">
              Car model
              <span className="order-summary__item-info">{carModel}</span>
            </li>
            <li className="order-summary__item">
              Car year
              <span className="order-summary__item-info">{carYear}</span>
            </li>
            <li className="order-summary__item">
              Color
              <span className="order-summary__item-info">{carpetColor} / {carpetTrim}</span>
            </li>
            <li className="order-summary__item">
              Set
              <span className="order-summary__item-info">{set}</span>
            </li>
          </ul>
        </div>
      </animated.div>
    </div>
  )
}
export default OrderSummary;