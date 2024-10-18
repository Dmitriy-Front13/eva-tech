import { Link } from 'react-router-dom';

import closeBtn from '../../assets/images/xmark-solid.svg';
import logo from '../../assets/images/logoMobile.svg';

import './headerSidebar.scss';

type HeaderSidebar = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const HeaderSidebar: React.FC<HeaderSidebar> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`header__menu-mobile ${menuOpen ? 'header__menu-mobile--active' : ''}`}>
      <div className="header__menu-top">
        <Link to="/" aria-label="Custom EVA mats for the interior of your car" className="logo header__menu-logo">
          <img src={logo} alt="Evacode logo" />
        </Link>
        <img className="close-btn"
          src={closeBtn}
          alt="close button" 
          onClick={() => setMenuOpen(false)}/>
      </div>
      <nav className="header__menu-nav">
        <ul className="header__menu-items">
          <li className="header__menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/about-product">What is Eva?</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/#price-constructor">Price</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/warranty">Warranty</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/delivery">Delivery</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
        <div className="header__menu-social">
          <div className="header__menu-icon">
            <a aria-label="Custom EVA mats facebook"
              href="https://www.facebook.com/people/VI-CarMats/61556124253098/?mibextid=sCpJLy"
              target="_blank" className="header_menu-link">
              <i className="icon-facebook"></i>
            </a>
            <a aria-label="Custom EVA mats instagram" href="
                    https://www.instagram.com/evatech.ca/" target="_blank" className="header_menu-link">
              <i className="icon-instagram"></i>
            </a>
          </div>
          <a aria-label="Custom EVA mats phone" href="tel:+16139857956" target="_blank"
            className="header_menu-link about-info__text-main">
            +1 613-214-1621
          </a>
          <a aria-label="Custom EVA mats gmail" href="mailto:info.evatech.ca@gmail.com" target="_blank"
            className="header_menu-link about-info__text-main">
            info.evatech.ca@gmail.com
          </a>
          <p className="header_menu-text">Our Location: Kingston, ON</p>
        </div>
      </nav>
    </div>
  )
}

export default HeaderSidebar;