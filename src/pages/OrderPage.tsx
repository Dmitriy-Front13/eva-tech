import { useRef } from "react";

import OrderProduct from "../components/orderProduct/OrderProduct";
import OrderTotal from '../components/orderTotal/OrderTotal';
import OrderDelivery from '../components/orderDelivery/OrderDelivery';
import OrderPromo from '../components/orderPromo/OrderPromo';
import OrderBtn from '../components/orderBtn/OrderBtn';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/faq/FAQ';

import '../assets/styles/order.scss';

interface OrderDeliveryRef {
  validateAndSubmit: () => void;
}

const OrderPage = () => {
  const orderDeliveryRef = useRef<OrderDeliveryRef | null >(null);

  const handleCheckout = () => {
    if (orderDeliveryRef.current) {
      orderDeliveryRef.current.validateAndSubmit();
    }
  };
  return (
    <main>
      <section className="order">
        <div className="container">
          <h1 className='order__title'>Step 4 of 5</h1>
          <h2 className="order__sub-title">Calculate the Shipping Cost for Your Order</h2>
          <div className="order__inner">
            <OrderProduct />
            <OrderPromo />
            <OrderDelivery ref={orderDeliveryRef} />
            <OrderTotal />
            <OrderBtn onCheckout={handleCheckout}/>
          </div>
        </div>
      </section>
      <Reviews />
      <FAQ/>
    </main >
  )
}

export default OrderPage;
