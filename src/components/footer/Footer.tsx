import { Link } from 'react-router-dom';

import logo from '../../assets/images/logoSVG.svg';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" aria-label="Custom EVA mats for the interior of your car" className="logo">
          <img src={logo} alt="Evacode logo" />
        </Link>
        <div className="footer__social">
          <a aria-label="Custom EVA mats facebook"
            href="https://www.facebook.com/people/VI-CarMats/61556124253098/?mibextid=sCpJLy"
            target="_blank" className="footer__social-link">
            <i className="icon-facebook"></i>
          </a>
          <a aria-label="Custom EVA mats instagram" href="
                                    https://www.instagram.com/evatech.ca" target="_blank"
            className="footer__social-link">
            <i className="icon-instagram"></i>
          </a>
          <a aria-label="Custom EVA mats gmail" href="mailto:info.evatech.ca@gmail.com" target="_blank"
            className="footer__social-link">
            <i className="icon-mail"></i>
            info.evatech.ca@gmail.com
          </a>
          <a aria-label="Custom EVA mats phone" href="tel:+16139857956" target="_blank"
            className="footer__social-link">
            <i className="icon-call-in"></i>
            +1 613-214-1621
          </a>
          <p className="footer__social-text">Our Location: Kingston, ON
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;