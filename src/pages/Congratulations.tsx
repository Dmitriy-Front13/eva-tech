import '../assets/styles/congratulations.scss';

const Congratulations = () => {
  return (
    <main className="congratulations">
      <div className="congratulations__card">
        <header className="congratulations__header">
          <h1 className="congratulations__title">
            <svg xmlns="http://www.w3.org/2000/svg" className="congratulations__icon" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Thank You for Your Order!
          </h1>
        </header>
        <div className="congratulations__content">
          <p className="congratulations__message">
            We are excited to share that your order for car mats has been successfully processed. Your choice to enhance your vehicle's interior with our new generation car mats is truly valued.
          </p>
          <div className="congratulations__status">
            <h2 className="congratulations__subtitle">
              <svg xmlns="http://www.w3.org/2000/svg" className="congratulations__icon congratulations__icon--small" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              Order Status
            </h2>
            <p>
              We are currently processing your payment, and your set of mats has entered production. This process may take up to 5 business days. We will ship your order as soon as possible.
            </p>
          </div>
          <div className="congratulations__contact">
            <p className="congratulations__contact-text">If you have any questions, please feel free to reach out to us:</p>
            <p className="congratulations__email">
              <svg xmlns="http://www.w3.org/2000/svg" className="congratulations__icon congratulations__icon--small" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:info@eva-tech.ca">
                info@eva-tech.ca
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Congratulations