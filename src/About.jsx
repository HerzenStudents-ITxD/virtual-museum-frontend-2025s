import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx";
import aboutMuseum1 from "./assets/img/about-museum-1.png";
import aboutMuseum2 from "./assets/img/about-museum-2.png";
import whiteArrow from "./assets/img/svg/white-arrow.svg";

import "./pages/About.css";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <Header isHeroHeader={false} />
        
        {/* Основной контейнер */}
        <div className="about-header-container">
          {/* Верхний контент (заголовок + текст) */}
          <div className="about-top-content">
            <h1 className="about-main-heading">Музей традиционной культуры</h1>
            
            <div className="about-text-container">
              <p className="about-text">
                Основан при <span class="medium-text">Институте народов Севера</span> Российского государственного педагогического университета <span class="medium-text">им. А. И. Герцена</span> – уникальный научно-образовательный центр коренных народов Севера, который 90 лет выполняет важную миссию – готовит специалистов в области этнопедагогики, этнофилологии и этнокультурологии для регионов Севера, Сибири и Дальнего Востока России.
                <br /><br />
                Это — научно-педагогические кадры из числа коренных малочисленных народов Севера (КМНС), которые работают в сферах образования, культуры, науки, общественной деятельности в северных регионах.
              </p>
            </div>
          </div>

          {/* Нижний блок (плашки + слайдер) */}
          <div className="about-bottom-section">
            {/* Левый блок с плашками и адресом */}
            <div className="about-links-wrapper">
              <div className="about-links-container">
                <div className="about-link-wrapper">
                  <div className="about-link">ВКОНТАКТЕ</div>
                  <div className="about-link-circle">
                    <img src={whiteArrow} alt="arrow" />
                  </div>
                </div>
                
                <div className="about-link-wrapper" style={{ marginTop: '16px' }}>
                  <div className="about-link">ИНСТИТУТ НАРОДОВ СЕВЕРА</div>
                  <div className="about-link-circle">
                    <img src={whiteArrow} alt="arrow" />
                  </div>
                </div>
              </div>
              
              <p className="about-address">
                <span className="demi-text">Адрес:</span> Санкт-Петербург, пр. Стачек, 30к29
              </p>
            </div>

            {/* Правый блок со слайдером */}
            <div className="slider-absolute-wrapper">
              <div className="about-slider-container">
                <Swiper
                  className="about-swiper"
                  slidesPerView="auto"
                  spaceBetween={70}
                  grabCursor={true}
                >
                  <SwiperSlide className="about-slide">
                    <img src={aboutMuseum1} alt="Музей 1" />
                  </SwiperSlide>
                  <SwiperSlide className="about-slide">
                    <img src={aboutMuseum2} alt="Музей 2" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;