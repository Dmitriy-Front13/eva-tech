
import '../assets/styles/warranty.scss';

const Warranty = () => {
  return (
    <main>
      <section className="warranty">
        <div className="container">
          <div className="warranty__wrapper">
            <div className="warranty__inner">
              <h2 className="warranty__title">Warranty</h2>
              <p className="warranty__desc">
                At Evatech, we pride ourselves on delivering high-quality products that you can trust. To provide you with peace of mind, we offer a 6-month warranty on all our car mats. This warranty covers defects in materials or workmanship under normal use, which refers to regular conditions of driving and climate, excluding excessive wear from extreme or improper usage.</p>
              <p className="warranty__desc">
                If a defect arises within the warranty period, Evatech will replace/repair the product free of charge and
                cover all associated shipping costs. Please note that any claims made under the warranty must be accompanied
                by a valid warranty card and proof of purchase.
              </p>
              <div className="warranty__items">
                <div className="warranty__item">
                  <h5 className="warranty__items-title">Warranty Card</h5>
                  <p className="warranty__desc">The warranty card is sent to you via email upon purchase and is valid starting from the delivery date of your car mats. Be sure to keep the digital copy for any future warranty claims.</p>
                  <p className="warranty__desc">This warranty does not cover:</p>
                  <ul>
                    <li>Damage resulting from misuse, improper installation, or accidental damage.
                    </li>
                    <li>Products that have been altered or modified by the customer</li>
                  </ul>
                </div>
                <div className="warranty__item">
                  <h5 className="warranty__items-title">Installation Guidelines</h5>
                  <p className="warranty__desc">Proper installation is essential for product performance. Installation guidelines are provided with your car mats upon delivery. Be sure to follow these instructions carefully to avoid any issues.
                  </p>
                </div>
              </div>
            </div>
            <div className="warranty__inner">
              <h2 className="warranty__title">Refund</h2>
              <div className="warranty__items">
                <div className="warranty__item">
                  <p className="warranty__desc">We understand that occasionally a product may not meet your expectations. For this reason, we offer a return policy that allows customers to return products within 7 days of receiving them, provided the following conditions are met:</p>
                  <ul>
                    <li>The product must be unused, in its original packaging, and in resalable condition.</li>
                    <li>The warranty card must be included as proof of purchase.</li>
                  </ul>
                </div>
                <div className="warranty__item">
                  <h5 className="warranty__items-title">Return Process</h5>
                  <p className="warranty__desc">If you wish to return an item, please fill out the provided return form and attach all necessary documents, including the warranty card. Once approved, we will guide you through the return process.</p>
                  <p className="warranty__desc" style={{marginTop: '10px'}}>Please note:</p>
                  <ul>
                    <li>Non-defective products: If you are returning a product that is not defective, you will be responsible for the return shipping costs. Alternatively, you may return the product in person to our location at 1135 Basswood Pl, Kingston, Ontario.</li>
                    <li>Defective products: If the product you received is defective, Evatech will promptly arrange for a replacement at no additional cost to you, and we will cover all shipping expenses for the exchange.</li>
                  </ul>
                </div>
                <div className="warranty__item">
                  <h5 className="warranty__items-title">Timing for Returns</h5>
                  <p className="warranty__desc">Returns must be shipped back to us no later than 7 days from the date of delivery. If this timeframe is exceeded, the return may not be accepted. By ensuring that the product is returned to us as specified, you help us process your request more efficiently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Warranty;