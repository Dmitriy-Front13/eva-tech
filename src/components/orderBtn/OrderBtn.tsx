import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../redux/store";

type OrderBtn = {
  onCheckout: () => void;
}

const OrderBtn: React.FC<OrderBtn> = ({ onCheckout }) => {
  const navigate = useNavigate();
  const isShipping = useSelector((state: RootState) => state.shipping.postalCode);
  const handleClick = () => {
    if (isShipping) {
      navigate('/checkout');
    } else {
      onCheckout();
    }
  };
  return (
    <button
      className={`order__btn ${!isShipping ? 'order__btn--disabled' : ''}`}
      onClick={handleClick}>Continue to checkout</button>
  )
}

export default OrderBtn;