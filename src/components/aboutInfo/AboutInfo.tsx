import img from '../../assets/images/aboutus-img.jpg';

import './aboutInfo.scss';

const AboutInfo = () => {
  return (
    <section className="aboutUs">
      <div className="container">
        <img className="aboutUs__img" src={img} alt=""/>
          <div className="aboutUs__inner">
            <div className="aboutUs__info">
              <h2 className="aboutUs__title">About us</h2>
              <p className="aboutUs__desc">EvaTech is a young company specializing in the production of EVA car mats based in Kingston. Founded in 2024, despite our relatively recent establishment, we have already established a reputation in the car mat market for providing high-quality and affordable products. Unlike other sellers who resell mats from China, we manufacture custom car mats using new EVA material in Canada 🇨🇦 . We offer a variety of colors and styles to suit different preferences. Based in Kingston, we are open to collaborations with various companies and representatives in the automotive industry.</p>
            </div>
            <div className="contactUs__inner">
              <h2 className="contactUs__title">Contact us</h2>
              <div className="contactUs__content">
                <span className="contactUs__svg"></span>
                <a aria-label="Custom EVA mats phone" href="tel:+16132141621" target="_blank" className="contactUs__link">
                  +1 613-214-1621
                </a>
                <a aria-label="Custom EVA mats gmail" href="mailto:info.evatech.ca@gmail.com" target="_blank"
                  className="contactUs__link">
                  info.evatech.ca@gmail.com
                </a>
                <div className="contactUs__icons">
                  <a aria-label="Custom EVA mats facebook"
                    href="https://www.facebook.com/people/VI-CarMats/61556124253098/?mibextid=sCpJLy"
                    target="_blank" className="contactUs__link">
                    <i className="icon-facebook"></i>
                  </a>
                  <a aria-label="Custom EVA mats instagram" href="
                        https://www.instagram.com/evatech.ca" target="_blank"
                    className="contactUs__link">
                    <i className="icon-instagram"></i>
                  </a>
                </div>
              </div>
              <span className="contactUs__span"></span>
            </div>
          </div>

      </div>
    </section>
  )
}

export default AboutInfo;