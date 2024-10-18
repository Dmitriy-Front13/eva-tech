import './hero.scss';

import heroTick from '../../assets/images/hero/hero-tick.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="title hero__title">Say Goodbye to Messy Car Floors with EVATECH</h1>
          <h2 className="sub-title hero__sub-title">Enhance your car with stylish and waterproof EVA CarMats!
          </h2>
          <p className="hero__text">
            <img className="hero__text-icon" src={heroTick} alt="Text icon tick" />
            High quality guaranteed
          </p>
          <div className="hero-scroll-down">
            <a aria-label="Get a price for the order" href="#price-constructor"
              className="button hero__button">GET A QUOTE</a>
            <a aria-label="Get a price for the order" href="#price-constructor"
              className="hero-scroll-down__arrows">
              <div className="hero-scroll-down__arrow">
                <i className="icon-arrow-down"></i>
              </div>
              <div className="hero-scroll-down__arrow">
                <i className="icon-arrow-down"></i>
              </div>
              <div className="hero-scroll-down__arrow">
                <i className="icon-arrow-down"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;