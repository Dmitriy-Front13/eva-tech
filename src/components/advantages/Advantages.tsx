import { useHover } from 'react-use';

import img1 from '../../assets/images/advantages/1.png';
import img2 from '../../assets/images/advantages/2.png';
import img3 from '../../assets/images/advantages/3.png';
import img4 from '../../assets/images/advantages/4.png';
import img5 from '../../assets/images/advantages/5.png';
import img6 from '../../assets/images/advantages/6.png';

import video from '../../assets/images/advantages/video.jpg';

import './advantages.scss';

const items: AdvantageItem[] = [
  { image: img1, description: 'There are more than 500 colours. So you can choose not only the colour of the mat, but also the colour of the edging.' },
  { image: img2, description: 'EVA car mats are easy to clean. Just pull them out of the car and knock out.' },
  { image: img3, description: 'EVA car mats retain up to 50 oz of water, dirt and dust and don’t let the car interior become dirty.' },
  { image: img4, description: 'EVA is elastic, flexible and resilient material. It follows the relief of objects and fits them perfectly.' },
  { image: img5, description: 'The material is resistant to environmental influences and other mechanical impact.' },
  { image: img6, description: 'EVA is an environmentally friendly material, completely hypoallergenic. It does not have any smell or toxic effects.' },
];

type AdvantageItem = {
  image: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItem> = ({ image, description }) => {
  const item = (hovered: boolean) =>
    <div className={`advantages__item-desc ${hovered ? 'advantages__item-desc--active' : ''}`}>
      {description}
    </div>
  const [hoverable, hovered] = useHover(item);
  return (
    <div className="advantages__item">
      <img src={image} alt="" />
      {hoverable}
    </div>
  );
};

const Advantages = () => {
  return (
    <>
      <div className="video__text">
        <h4 className="video__title">Watch a video</h4>
        <p className="video__subtitle">about EVA Floorliner</p>
      </div>
      <div className="advantages__video">
        <a data-fancybox href="https://youtu.be/UijjcqK0r5c?si=5S_sJcYn1WDx90Vw">
          <img src={video} alt="Video preview for EVA Floorliner  " />
        </a>
      </div>
      <section className="advantages section">
        <div className="container">
          <h2 className="section__title advantages__title">
            <span>Advantages</span> of <span>EVA</span> car mats
          </h2>
          <div className="advantages__items">
            {items.map((item, index) => (
              <AdvantageItem
                key={index}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantages;
