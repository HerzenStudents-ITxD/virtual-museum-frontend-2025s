const Header = () => {
    return (
      <header className="header">
        <header className="header">
            <div className="container header__conteiner">
              <a href="" className="logo-wrapper">
                <img
                  src={logoMobile}
                  alt="logo"
                  className="header-logo"
                />
                <p className="header-logo-description">
                  МУЗЕЙ <br />ТРАДИЦИОННОЙ <br />КУЛЬТУРЫ
                </p>
              </a>
              <div className="header__buttons">
                <button className="header__button-info background-img"></button>
                <button
                  id="burger-button"
        
                  className={
                `header__button-burger background-img ${
                  burgerMenuOpen ? "burger-button-close" : ""
                }`
                  }
        
                  onClick={toggleBurgerMenu}
                ></button>
              </div>
            </div>
              </header>
      </header>
    );
  };
  export default Header;