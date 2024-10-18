import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/images/logoSVG.svg';
import burgerBtn from '../../assets/images/burgerBtn.svg';


import './header.scss'
import HeaderSidebar from '../headerSidebar/HeaderSidebar';

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [pathname]);

  const isMainPage = pathname === '/';

  return (
    <>
      <header className={isMainPage ? 'header header--main' : 'header'}>
        <div className="container">
          <div className="header__inner">
            <Link to="/" aria-label="Custom EVA mats for the interior of your car" className="header__logo logo">
              <img src={logo} alt="Evacode logo" />
            </Link>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link to="/" className="header__nav-link">Home</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/about-product" className="header__nav-link">What is Eva?</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/#price-constructor" className="header__nav-link">Price</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/warranty" className="header__nav-link">Warranty</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/delivery" className="header__nav-link">Delivery</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/about-us" className="header__nav-link">About us</Link>
                </li>
              </ul>
              <SocialList isMainPage={isMainPage} />
            </nav>
            <img className="burger-btn"
              src={burgerBtn}
              alt="burger button"
              onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </header>
      <HeaderSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}

type SocialList = {
  isMainPage: boolean;
}

const SocialList: React.FC<SocialList> = ({ isMainPage }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="header__social">
      <button
        className={`header__social-btn ${isMainPage ? 'header__social-btn--main' : ''}`}
        onClick={() => setShowInfo(!showInfo)}
      >
        Contact Us
        <svg id="arrow" className={`${showInfo ? 'rotate' : null}`} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 1.40051L5.96734 7.00272L6.00006 6.97063L6.031 7.00097L12 1.40051L10.5718 0.000421405L5.99867 4.2912L1.42778 0L0 1.40051Z" fill={`${isMainPage ? "white" : "black"}`} />
        </svg>
      </button>
      <div className={`header__social-list ${isMainPage ? 'header__social-list--main' : ''} ${showInfo ? 'fadeIn' : 'fadeOut'}`}>
        <a aria-label="Custom EVA mats phone"
          href="tel:+16139857956"
          target="_blank"
          className={`header__social-link header__social-text ${isMainPage ? 'header__social-text--main' : ''}`}>
          +1 613-985-7956
        </a>
        <a aria-label="Custom EVA mats gmail"
          href="mailto:vi.carmats@gmail.com"
          target="_blank"
          className={`header__social-link header__social-text ${isMainPage ? 'header__social-text--main' : ''}`}>
          vi.carmats@gmail.com
        </a>
        <div className="header__social-icon">
          <a aria-label="Custom EVA mats facebook"
            href="https://www.facebook.com/people/VI-CarMats/61556124253098/?mibextid=sCpJLy"
            target="_blank"
            className={`header__social-link ${isMainPage ? 'header__social-link--main' : ''}`}>
            <i className="icon-facebook"></i>
          </a>
          <a aria-label="Custom EVA mats instagram"
            href="https://www.instagram.com/vi.carmats?igsh=ZXl0cHY5eDA1ZHVv" target="_blank"
            className={`header__social-link ${isMainPage ? 'header__social-link--main' : ''}`}>
            <i className="icon-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;

