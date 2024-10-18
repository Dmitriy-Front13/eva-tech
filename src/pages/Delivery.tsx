
import '../assets/styles/delivery.scss'

const Delivery = () => {
  return (
    <main>
      <section className="delivery">
        <div className="container">
          <div className="delivery__wrapper">
            <div className="delivery__inner">
              <h2 className="delivery__title">Payment and Shipping</h2>
              <p className="delivery__desc">At Evatech, we are committed to ensuring that your car mats are delivered in a timely and reliable manner. We provide shipping services across the province of Ontario, partnering with trusted couriers such as Canada Post, UPS, and Purolator to ensure your order arrives as quickly as possible.</p>
              <ul className="delivery__items">
                <li className="delivery__item-title">
                  Delivery Time
                  <p className="delivery__desc">The average delivery time ranges from 1 to 3 working days, depending on the transport company's schedule and the remoteness of the destination. Rest assured, we choose the shipping company based on which option will get your order to you the fastest.</p>
                </li>
                <li className="delivery__item-title">
                  Free Delivery in Kingston
                  <p className="delivery__desc">We are pleased to offer free delivery within Kingston, Ontario. For other areas, the cost of delivery will be calculated during the order process, based on your location and distance from our production facility.</p>
                </li>
                <li className="delivery__item-title">
                  Delivery Calculator
                  <p className="delivery__desc">During the final stage of placing your order, our system will automatically calculate your shipping costs based on the distance from our factory. Simply enter your postal code, and the system will display the exact delivery cost. Additionally, if you have a promotional code, you can enter it at this stage for a discount.</p>
                </li>
                <li className="delivery__item-title">
                  Shipping Cost Guarantees
                  <p className="delivery__desc">The delivery cost calculated by our system at checkout is final. Evatech guarantees that the shipping charge will not exceed the initial amount displayed during the order process, regardless of the courier we choose.</p>
                </li>
                <li className="delivery__item-title">
                  Delivery Across Ontario
                  <p className="delivery__desc">Evatech proudly offers delivery across the entire province of Ontario, ensuring you receive our high-quality car mats no matter where you are located.</p>
                </li>
              </ul>
            </div>
            <div className="delivery__inner">
              <h2 className="delivery__title">Payment</h2>
              <p className="delivery__desc">At Evatech, we offer flexible and convenient payment options for your order:</p>
              <ul className="delivery__items">
                <li className="delivery__item-title">
                  E-Transfer Payment
                  <p className="delivery__desc">Customers can pay for their orders via e-transfer. Payment should be sent to <b>info@eva-tech.ca</b>, with the order number used as the secret question and "Evatech" as the answer. Orders will only be processed and put into production after payment has been received. Please note that orders unpaid within 3 days will not be processed.</p>
                </li>
                <li className="delivery__item-title">
                  Cash Payment
                  <p className="delivery__desc">We are pleased to offer free delivery within Kingston, Ontario. For other areas, the cost of delivery will be calculated during the order process, based on your location and distance from our production facility.</p>
                </li>
              </ul>
              <div className="delivery__box">
                <p className="delivery__items-title">The ordering process involves four simple steps:</p>
                <ul className="delivery__list">
                  <li className="delivery__list-item">Providing your delivery address and selecting the delivery method.</li>
                  <li className="delivery__list-item">Entering your personal details (full name, phone number, email address).</li>
                  <li className="delivery__list-item">Completing payment.</li>
                  <li className="delivery__list-item">Confirmation of order details by e-mail.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Delivery;