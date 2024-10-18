
import comparison1 from '../../assets/images/about-product/comparison/comparison-1.jpg';
import comparison2 from '../../assets/images/about-product/comparison/comparison-2.jpg';
import comparison3 from '../../assets/images/about-product/comparison/comparison-3.jpg';

import ok from '../../assets/images/about-product/comparison/comparison-ok.png';
import notOk from '../../assets/images/about-product/comparison/comparison-not-ok.png';
import question from '../../assets/images/about-product/comparison/comparison-question.png';

import './comparison.scss';

const Comparison = () => {
  return (
    <section className="comparison section">
      <div className="container">
        <div className="comparison__cards">
          <div className="comparison__card card-comparison">
            <h3 className="card-comparison__title">Pile mats</h3>
            <div className="card-comparison__image">
              <img src={comparison1} alt="Pile mats" />
            </div>
            <ul className="property-list text">
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={notOk} alt="Not okay" />
                Difficult to clean
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={notOk} alt="Not okay" />
                Retail Price $140+
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={notOk} alt="Not okay" />
                Doesn't hold dirt
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={question} alt="Question" />
                They fit better than rubber mats
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={notOk} alt="Not okay" />
                No warranty, followed by the constant dirt and water on the mat
              </li>
            </ul>
          </div>
          <div className="comparison__card card-comparison card-comparison--highlighted">
            <h3 className="card-comparison__title">"<span>EvaTech</span>CarMats"
            </h3>
            <div className="card-comparison__image">
              <img src={comparison2} alt="Our rugs" />
            </div>
            <ul className="property-list text">
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={ok} alt="Okay" />
                Simple maintenance
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={question} alt="Question" />
                Retail Price $59
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={ok} alt="Okay" />
                Keeps dirt and 100% waterproof
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={ok} alt="Okay" />
                Custom made to fit your car
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={ok} alt="Okay" />
                6 months warranty
              </li>
            </ul>
          </div>
          <div className="comparison__card card-comparison">
            <h3 className="card-comparison__title">Rubber mats</h3>
            <div className="card-comparison__image">
              <img src={comparison3} alt="Rubber mats" />
            </div>
            <ul className="property-list text">
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={ok} alt="Okay" />
                Simple maintenance
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={ok} alt="Okay" />
                Retail Price $80-350
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={notOk} alt="Not okay" />
                Creating puddles under feet
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={notOk} alt="Not okay" />
                Terrible rubber smell in the car
              </li>
              <li className='property-list__item'>
                <img className="card-comparison__icon" src={question} alt="Question" />
                Doesn't cover the whole feet area
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison;