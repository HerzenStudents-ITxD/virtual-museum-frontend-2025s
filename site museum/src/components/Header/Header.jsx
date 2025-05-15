import { useState } from "react";
import { Link } from "react-router-dom";
import logoMobile from "../../assets/img/svg/logo-mobile.svg";
import logo from "../../assets/img/svg/logo.svg";
import "./Header.css";

export default function Header({ isHeroHeader = false }) {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  function toggleDropdownMenu() {
    setDropdownMenuOpen(!dropdownMenuOpen);
  }

  function toggleBurgerMenu() {
    setBurgerMenuOpen(!burgerMenuOpen);
  }

  // Содержимое десктопного хедера
  const desktopHeaderContent = (
    <>
      <Link to="/" className="logo-wrapper">
        <img src={logo} alt="logo" className="section-hero__header-logo" />
        <p className="section-hero__header-logo-description">
          МУЗЕЙ <br />ТРАДИЦИОННОЙ <br />КУЛЬТУРЫ
        </p>
      </Link>
      <ul className="section-hero__header-list">
        <li className="section-hero__header-item">
          <Link to="/exhibits" className="section-hero__header-item-description">
            3D-экспонаты
          </Link>
        </li>
        <li
          id="dropdown-button"
          className="section-hero__header-item"
          onClick={toggleDropdownMenu}
        >
          <p
            id="dropdown-description"
            className={`section-hero__header-item-description ${
              dropdownMenuOpen ? "dropdown-description-active" : ""
            }`}
          >
            Культура
          </p>
          <svg
            id="dropdown-triangle"
            className={`dropdown-arrow ${
              dropdownMenuOpen ? "display-none" : ""
            }`}
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 9L0.73686 0.75L10.2631 0.750001L5.5 9Z"
              fill="white"
            />
          </svg>
          <svg
            id="dropdown-circle"
            className={`dropdown-circle ${
              dropdownMenuOpen ? "display-flex" : ""
            }`}
            width="9"
            height="9"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" fill="#1c1a1f" />
          </svg>
          <ul
            id="dropdown-menu"
            className={`dropdown-menu-list dropdown-menu-disappearance ${
              dropdownMenuOpen ? "dropdown-menu-active" : ""
            }`}
          >
            <li className="dropdown-item-m">
              <Link to="/culture" className="dropdown-item-link">Художественная</Link>
            </li>
            <li className="dropdown-item-m">Религиозная</li>
            <li className="dropdown-item-m">
              Традиционная <br />
              Жизнеобеспечения
            </li>
          </ul>
        </li>
        <li className="section-hero__header-item">
          <p className="section-hero__header-item-description">Материалы</p>
          <svg
            className="dropdown-arrow"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 9L0.73686 0.75L10.2631 0.750001L5.5 9Z"
              fill="white"
            />
          </svg>
        </li>
      </ul>
      <div className="special-button-wrapper">
        <Link to="/about" className="special-header-button">О МУЗЕЕ</Link>
        <div className="special-button-circle background-img"></div>
      </div>
    </>
  );

  return (
    <>
      {/* Мобильный хедер */}
      <header className="header">
        <div className="container header__conteiner">
          <Link to="/" className="logo-wrapper">
            <img src={logoMobile} alt="logo" className="header-logo" />
            <p className="header-logo-description">
              МУЗЕЙ <br />ТРАДИЦИОННОЙ <br />КУЛЬТУРЫ
            </p>
          </Link>
          <div className="header__buttons">
            <button className="header__button-info background-img"></button>
            <button
              id="burger-button"
              className={`header__button-burger background-img ${
                burgerMenuOpen ? "burger-button-close" : ""
              }`}
              onClick={toggleBurgerMenu}
            ></button>
          </div>
        </div>
      </header>

      {/* Бургер меню */}
      <div
        id="burger-menu"
        className={`burger-menu ${burgerMenuOpen ? "burger-menu-open" : ""}`}
      >
        <ul className="burger-menu-list">
          <li className="burger-menu-item">
            <Link to="/exhibits" className="burger-menu-item-link">3D-экспонаты</Link>
          </li>
          <li className="burger-menu-item">
            <Link to="/culture" className="burger-menu-item-link">Художественная культура</Link>
          </li>
          <li className="burger-menu-item">
            <Link to="" className="burger-menu-item-link">Религиозная культура</Link>
          </li>
          <li className="burger-menu-item">
            <Link to="" className="burger-menu-item-link">
              Традиционная культура <br />жизнеобеспечения
            </Link>
          </li>
          <li className="burger-menu-item">
            <Link to="" className="burger-menu-item-link">Языковые материалы</Link>
          </li>
          <li className="burger-menu-item">
            <Link to="" className="burger-menu-item-link">материалы экспедиций</Link>
          </li>
          <li className="burger-menu-item">
            <Link to="" className="burger-menu-item-link">Институт народов севера</Link>
          </li>
        </ul>
      </div>

      {/* Десктопный хедер */}
      {isHeroHeader ? (
        <div className="section-hero__header">
          {desktopHeaderContent}
        </div>
      ) : (
        <div className="desktop-header">
          {desktopHeaderContent}
        </div>
      )}
    </>
  );
}