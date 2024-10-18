import BillingFormPayPal from '../components/billingForm/BillingFormPayPal';

import '../assets/styles/checkout.scss';

const Checkout = () => {
  return (
    <main>
      <section className="checkout">
        <div className="container">
          <h2 className="checkout__title">Step 5 of 5</h2>
          <h4 className="checkout__sub-title">Complete your order by providing your details</h4>
          <BillingFormPayPal/>
        </div>
      </section>
    </main>
  )
}

export default Checkout;