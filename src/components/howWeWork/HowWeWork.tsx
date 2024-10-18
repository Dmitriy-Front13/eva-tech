import { Link } from 'react-router-dom';

import aboutProduct from '../../assets/images/howWeWork/about_product.jpg';
import aboutUs from '../../assets/images/howWeWork/about_us.jpg';
import delivery from '../../assets/images/howWeWork/delivery.jpg';
import warranty from '../../assets/images/howWeWork/warranty.jpg';

import './howWeWork.scss'


type Items = {
  title: string;
  images: string;
  link: string
}[]

const items: Items = [
  { title: 'About the product', images: aboutProduct, link: 'about-product' },
  { title: 'About us', images: aboutUs, link: 'about-us' },
  { title: 'Warranty and refund', images: warranty, link: 'warranty' },
  { title: 'Delivery', images: delivery, link: 'delivery' }
];
const HowWeWork = () => {
  return (
    <section className="how-we-work section">
      <div className="container">
        <div className="how-we-work__items">
          {items.map((item, index) => (
            <div className="how-we-work__item" key={index}>
              <Link to={item.link} className="how-we-work__link"
                style={{ backgroundImage: `url(${item.images})` }}>
                <div className="how-we-work__link-items">
                  <h4 className="how-we-work__link-title">{item.title}</h4>
                  <span>More {'>'}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork;