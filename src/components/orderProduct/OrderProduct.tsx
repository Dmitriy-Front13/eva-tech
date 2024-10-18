
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import './orderProduct.scss'
const OrderProduct = () => {

  
  const {carMake, carYear, set, carpetColor, carpetTrim} = useSelector((state: RootState) => state.priceConstructor);

  return (

    <div className="order-product">
      <ul className="order-product__items">
        <li className="order-product__item">
          Car make
          <span className="order-product__desc">{carMake?.label}</span>
        </li>
        <li className="order-product__item">
          Car year
          <span className="order-product__desc">{carYear?.label}</span>
        </li>
        <li className="order-product__item">
          Carpet color
          <span className="order-product__desc">{carpetColor}</span>
        </li>
        <li className="order-product__item">
          Carpet trim
          <span className="order-product__desc">{carpetTrim}</span>
        </li>
        <li className="order-product__item">
          Set name
          <span className="order-product__desc">{set}</span>
        </li>
        <li className="order-product__item">
          Production Time
          <span className="order-product__desc order-product__desc--time">2 - 4 days</span>
        </li>
      </ul>
    </div>
  )
}

export default OrderProduct;

