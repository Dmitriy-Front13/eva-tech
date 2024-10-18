import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

import OrderSummary from '../orderSummary/OrderSummary';
import OrderTotal from "../orderTotal/OrderTotal";

import { getCurrentDate } from '../../utils/getCurrentDate';
import { showToast } from '../../utils/showToast';

import { RootState } from "../../redux/store";

import securityImg from '../../assets/images/security.jpg';

const BillingFormPayPal = () => {
  const { carMake, carModel, carYear, carpetColor, carpetTrim, set } = useSelector((state: RootState) => state.priceConstructor);
  const { product, total } = useSelector((state: RootState) => state.price);
  const { postalCode, shippingPrice } = useSelector((state: RootState) => state.shipping);
  const { usePromo, promoValue, discount } = useSelector((state: RootState) => state.promo);
  const navigate = useNavigate();

  const initialOptions = {
    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || "",
    currency: "CAD",
    components: "buttons",
  };

  const createPayload = (email: string) => ({
    formName: 'modalBuy',
    date: getCurrentDate(),
    carMake: carMake?.label,
    carModel: carModel?.label,
    carYear: carYear?.label,
    rugBackgroundColor: carpetColor,
    rugOutlineColor: carpetTrim,
    setType: set,
    promoCode: usePromo ? 'yes' : 'no',
    promoCodeValue: promoValue,
    discountValue: discount,
    postalCode: postalCode,
    shippingPrice: shippingPrice,
    subtotalPrice: product,
    totalPrice: total,
    email: email,
  });

  const handleOrder = async (details: any) => {
    try {
      const email = details.payer.email_address;
      const response = await axios.post('https://eva-tech.ca/action.php', createPayload(email));
      if (response.status === 200) {
        navigate('/congratulations');
      }
    } catch (error) {
      console.error('Error processing order:', error);
      showToast('An error occurred while processing your order. Please try again.');
    }
  };

  // Типизация createOrder
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total!.toString(),
          },
        },
      ],
    });
  };

  // Типизация onApprove
  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(handleOrder);
  };

  return (
    <div className="checkout__wrapper">
      <OrderTotal inCheckout={true} />
      <OrderSummary />
      <div className="checkout__btns">
        <img className="checkout__security-img" src={securityImg} alt="100% security" />
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default BillingFormPayPal;
