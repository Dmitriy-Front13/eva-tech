

import featureImg1 from '../../assets/images/about-product/features/features-1.jpg';
import featureImg2 from '../../assets/images/about-product/features/features-2.jpg';
import featureImg3 from '../../assets/images/about-product/features/features-3.jpg';
import featureImg4 from '../../assets/images/about-product/features/features-4.jpg';

import './features.scss';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__items">
        <h2 className="features__title">FEATURES OF EVA MATS</h2>
          <div className="features__item more">
            <img className="features__item-img" src={featureImg1} alt="" />
            <div className="features__item-box">
              <h5 className="features__item-title more__title">More than 200 color variations</h5>
              <p className="features__item-text more__text">You can choose not only the color of the mat, but also individually
                choose the color of the edging</p>
            </div>
          </div>
          <div className="features__item original">
            <div className="features__item-box align-right">
              <h5 className="features__item-title">Original fasteners from the car manufacturer</h5>
              <p className="features__item-text">We use factory fasteners as a car manufacturer, if there are no
                fasteners, we add Velcro on the back side</p>
            </div>
            <img className="features__item-img" src={featureImg2} alt="" />
          </div>
          <div className="features__item withstand">
            <img className="features__item-img" src={featureImg3} alt="" />
            <div className="features__item-box">
              <h5 className="features__item-title withstand__title">Withstand from -50 C to +50 C</h5>
              <p className="features__item-text withstand__text">Retains elasticity at temperatures from -50 to +50 degrees</p>
            </div>
          </div>
          <div className="features__item templates ">
            <div className="features__item-box align-right">
              <h5 className="features__item-title individual__title">Individual templates for each car</h5>
              <p className="features__item-text">There are more than 6200 templates in our database, checked by multiple
                sales, all the shortcomings have been eliminated</p>
            </div>
            <img className="features__item-img" src={featureImg4} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;