import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import event1 from "./assets/img/section-events__item-1.png"
import event2 from "./assets/img/section-events__item-2.png"
import event3 from "./assets/img/section-events__item-3.png"
import delacha from "./assets/img/delacha.png";
import yagushka from "./assets/img/yagushka.png";
import logo from "./assets/img/svg/logo.svg"; 

import "swiper/css";

export default function Home() {
  const [openModalId, setOpenModalId] = useState(null);

  function openModal(id) {
    setOpenModalId(id);
  }

  function closeModals() {
    setOpenModalId(null);
  }

  return (
    <>
      <div
	id="overlay"
	className={`overlay ${openModalId === null? "overlay-none" : ""}`}
	onClick={closeModals}
      ></div>

      <div className="modals">
	<div
	  id="modal-1"
	  className={`modal ${openModalId === 1 ? "modal-open" : ""}`}
	>
	  <div className="modal-wrapper">
	    <img src={event1} alt="modal-image" className="modal-image"/>
	    <button
	      id="modal-close-button-1"
	      className="modal-close-button"
	      onClick={closeModals}
	    >
	      <svg className="modal-close-button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 1L17 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
		<path d="M17 1L1 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
		</svg>
	    </button>
	  </div>
	</div>

	<div
	  id="modal-2"
	  className={`modal ${openModalId === 2 ? "modal-open" : ""}`}
	>
	  <div className="modal-wrapper">
	    <img src={event2} alt="modal-image" className="modal-image"/>
	    <button
	      id="modal-close-button-2"
	      className="modal-close-button"
	      onClick={closeModals}
	    >
	      <svg className="modal-close-button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 1L17 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
		<path d="M17 1L1 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
		</svg>
	    </button>
	  </div>
	</div>

	<div
	  id="modal-3"
	  className={`modal ${openModalId === 3 ? "modal-open" : ""}`}
	>
	  <div className="modal-wrapper">
	    <img src={event3} alt="modal-image" className="modal-image"/>
	    <button
	      id="modal-close-button-3"
	      className="modal-close-button"
	      onClick={closeModals}
	    >
	      <svg className="modal-close-button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 1L17 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
		<path d="M17 1L1 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
		</svg>
	    </button>
	  </div>
	</div>
      </div>

      <section className="section-hero">
	<div className="box-container section-hero__box-container background-img">
	  <div className="container section-hero__container">
	  	<Header isHeroHeader={true} />
	
	    <h1 className="section-hero__heading">
	      Традиции севера <br />
	      в цифровом пространстве
	    </h1>
	    <ul className="section-hero__list">
	      <li className="tags-line">
		<p className="item-tag">народы севера</p>
		<p className="item-tag">3D-экспонаты</p>
	      </li>
	      <li className="tags-line">
		<p className="item-tag">Языковые материалы</p>
		<p className="item-tag">Экспедиции</p>
		<p className="item-tag">Культура</p>
	      </li>
	    </ul>
	  </div>
	  <Swiper
	    className="swiper mySwiper hero__box-container-list"
	    slidesPerView="auto"
	    spaceBetween={30}
	    grabCursor={true}
	  >
	    <div className="swiper-wrapper">
	      <SwiperSlide className="swiper-slide hero__box-container-item">
		<img
		  src={delacha}
		  alt="previous"
		  className="slide-previous-image"
		/>
		<div className="slide-content">
		  <p className="slide-content-heading">
		    Ансамбль <br />
		    "Дэлача"
		  </p>
		  <div className="slide-content-description-wrapper">
		    <p className="slide-content-description">Эвенки</p>
		    <button className="slide-content-button">
		      <svg
			className="slide-button-arrow"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		      >
			<path
			  d="M2.02651 13.2323C1.52268 13.7892 1.56567 14.6491 2.12253 15.1529C2.67939 15.6567 3.53925 15.6137 4.04307 15.0568L2.02651 13.2323ZM15.3489 1.96729C15.3114 1.21728 14.673 0.639667 13.923 0.677168L1.70078 1.28828C0.950758 1.32578 0.37315 1.96419 0.410651 2.71421C0.448152 3.46422 1.08656 4.04183 1.83658 4.00433L12.7008 3.46112L13.244 14.3253C13.2815 15.0753 13.9199 15.653 14.6699 15.6155C15.4199 15.578 15.9976 14.9395 15.9601 14.1895L15.3489 1.96729ZM4.04307 15.0568L14.9992 2.94745L12.9826 1.12294L2.02651 13.2323L4.04307 15.0568Z"
			  fill="white"
			/>
		      </svg>
		    </button>
		  </div>
		</div>
	      </SwiperSlide>
	      <SwiperSlide className="swiper-slide hero__box-container-item">
		<img
		  src={yagushka}
		  alt="previous"
		  className="slide-previous-image"
		/>
		<div className="slide-content">
		  <p className="slide-content-heading">
		    Девушка, одетая <br />в ненецкую ягушку
		  </p>
		  <div className="slide-content-description-wrapper">
		    <p className="slide-content-description">3D-модель</p>
		    <button className="slide-content-button">
		      <svg
			className="slide-button-arrow"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		      >
			<path
			  d="M2.02651 13.2323C1.52268 13.7892 1.56567 14.6491 2.12253 15.1529C2.67939 15.6567 3.53925 15.6137 4.04307 15.0568L2.02651 13.2323ZM15.3489 1.96729C15.3114 1.21728 14.673 0.639667 13.923 0.677168L1.70078 1.28828C0.950758 1.32578 0.37315 1.96419 0.410651 2.71421C0.448152 3.46422 1.08656 4.04183 1.83658 4.00433L12.7008 3.46112L13.244 14.3253C13.2815 15.0753 13.9199 15.653 14.6699 15.6155C15.4199 15.578 15.9976 14.9395 15.9601 14.1895L15.3489 1.96729ZM4.04307 15.0568L14.9992 2.94745L12.9826 1.12294L2.02651 13.2323L4.04307 15.0568Z"
			  fill="white"
			/>
		      </svg>
		    </button>
		  </div>
		</div>
	      </SwiperSlide>
	    </div>
	  </Swiper>
	</div>
      </section>

      <section className="section section-about">
	<div className="container section-about-container">
	  <div className="section-heading-wrapper">
  		<p className="heading-number">(01)</p>
  		<h4 className="section-heading">О музее</h4>
  		<div className="special-button-wrapper special-button-wrapper-desktop">
    		<Link 
      			to="/about" 
      			className="special-header-button about__special-header-button"
    		>
      			подробнее
    		</Link>
    		<div className="special-button-circle background-img"></div>
  		</div>
	</div>
	  <div className="section-about-description-wrapper">
	    <p className="section-about-description"><span className="description-marker">Музей традиционной культуры</span> включает сбор материалов студентами и преподавателями <span className="description-marker">Института народов Севера РГПУ им. А. И. Герцена</span> с участием специалистов местных музеев.</p>
	    <div className="special-button-wrapper special-button-wrapper-mobile">
	    </div>
	  </div>
	</div>
      </section>

       <section className="section section-events">
	<div className="box-container section-events__box-container">
	  <div className="container section-events__container">
	    <p className="heading-number">(02)</p>
	    <h4 className="section-events__heading">События музея</h4>
	  </div>
	    <ul className="section-events__list">
	      <li className="section-events__item">
		<div className="section-events__item-wrapper item-wrapper-1 background-img">
		  <div className="section-events__item-tags">
		    <div className="tags-line">
		      <p className="item-tag">Экспедиции</p>
		      <p className="item-tag">с. угоян</p>
		    </div>
		    <div className="tags-line tags-line-right">
		      <p className="item-tag">#2023</p>
		    </div>
		  </div>
		  <div className="section-events__item-content section-events__item-content-desktop">
		    <h4 className="section-events__item-heading">
		      Исследователи плывут <br/> по реке Алдан
		    </h4>
		    <div className="section-events__item-description-wrapper">
		      <div style={{minHeight: 0}}>
			<p className="section-events__item-description">
			  из п. Хатыстыр в с. Угоян Алданского района РС(Я). Время в пути 1,5 часа. 2023 г.
			</p>
		      </div>
		    </div>
		    <button
		      id="event-button-1"
		      className="section-events__item-button"
		      onClick={() => openModal(1)}
		    >
		      <p className="section-events__item-button-title">посмотреть</p>
		      <svg className="section-events__item-button-arrow" width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.10859 9.02447L0.987793 2.21783L3.15499 0.14624L12.443 9.02447L3.15499 17.9027L0.987793 15.8311L8.10859 9.02447Z" fill="white"/>
		      </svg>
		    </button>
		  </div>
		</div>
		<div className="section-events__item-content section-events__item-content-mobile">
		  <h4 className="section-events__item-heading">
		    Исследователи плывут по реке Алдан
		  </h4>
		  <p className="section-events__item-description section-events__item-description-mobile">
		    из п. Хатыстыр в с. Угоян Алданского района РС(Я). Время в пути 1,5 часа. 2023 г.
		  </p>
		</div>
	      </li>
	      <li className="section-events__item">
		<div className="section-events__item-wrapper item-wrapper-2 background-img">
		  <div className="section-events__item-content section-events__item-content-desktop">
		    <h4 className="section-events__item-heading">
		      Эспедиция в <br/>Республику Саха
		    </h4>
		    <div className="section-events__item-description-wrapper">
		      <div style={{minHeight: 0}}>
			<p className="section-events__item-description">
			  встреча оленей у эвенкийского стойбища близ Иенгры (Якутия), 2023 г.
			</p>
		      </div>
		    </div>
		    <button
		      id="event-button-2"
		      className="section-events__item-button"
		      onClick={() => openModal(2)}
		    >
		      <p className="section-events__item-button-title">посмотреть</p>
		      <svg className="section-events__item-button-arrow" width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.10859 9.02447L0.987793 2.21783L3.15499 0.14624L12.443 9.02447L3.15499 17.9027L0.987793 15.8311L8.10859 9.02447Z" fill="white"/>
		      </svg>
		    </button>
		  </div>
		</div>
		<div className="section-events__item-content section-events__item-content-mobile">
		  <h4 className="section-events__item-heading">
		    Эспедиция в Республику Саха
		  </h4>
		  <p className="section-events__item-description section-events__item-description-mobile">
		    встреча оленей у эвенкийского стойбища близ Иенгры (Якутия), 2023 г.
		  </p>
		</div>
	      </li>
	      <li className="section-events__item">
		<div className="section-events__item-wrapper item-wrapper-3 background-img">
		  <div className="section-events__item-content section-events__item-content-desktop">
		    <h4 className="section-events__item-heading">
		      Эвенкийское <br/>стойбище
		    </h4>
		    <div className="section-events__item-description-wrapper">
		      <div style={{minHeight: 0}}>
			<p className="section-events__item-description">
			  недалеко от п. Иенгра Нерюнгринского района РС(Я). 2023 г.
			</p>
		      </div>
		    </div>
		    <button
		      id="event-button-3"
		      className="section-events__item-button"
		      onClick={() => openModal(3)}
		    >
		      <p className="section-events__item-button-title">посмотреть</p>
		      <svg className="section-events__item-button-arrow" width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.10859 9.02447L0.987793 2.21783L3.15499 0.14624L12.443 9.02447L3.15499 17.9027L0.987793 15.8311L8.10859 9.02447Z" fill="white"/>
		      </svg>
		    </button>
		  </div>
		</div>
		<div className="section-events__item-content section-events__item-content-mobile">
		  <h4 className="section-events__item-heading">
		    Эвенкийское стойбище
		  </h4>
		  <p className="section-events__item-description section-events__item-description-mobile">
		    недалеко от п. Иенгра Нерюнгринского района РС(Я). 2023 г.
		  </p>
		</div>
	      </li>
	    </ul>
	  </div>
       </section>

       <section className="section section-dignities">
	<div className="container section-dignities__container">
	  <div className="section-heading-wrapper section-dignities__heading-wrapper">
	    <p className="heading-number">(03)</p>
	    <h4 className="section-heading">Достоинства <br/>музея</h4>
	  </div>
	  <ul className="section-dignities__list">
	    <li className="section-dignities__item">
	      <h4 className="section-dignities__item-number">01</h4>
	      <p className="section-dignities__item-description">
		<span className="description-marker">Культурное наследие:</span> Музей сохраняет и представляет уникальное культурное наследие, включая традиции, обычаи и искусство народов, проживающих в регионе
	      </p>
	    </li>
	    <li className="section-dignities__item">
	      <h4 className="section-dignities__item-number">02</h4>
	      <p className="section-dignities__item-description">
		<span className="description-marker">Интерактивные экспозиции:</span> Использование современных технологий и интерактивных экспозиций делает посещение музея увлекательным и познавательным
	      </p>
	    </li>
	    <li className="section-dignities__item">
	      <h4 className="section-dignities__item-number">03</h4>
	      <p className="section-dignities__item-description">
		<span className="description-marker">Уникальные экспонаты:</span> Музей располагает уникальными коллекциями, которые невозможно увидеть в других местах, включая предметы быта, искусства и ремесел
	      </p>
	    </li>
	  </ul>
	</div>
       </section>

	  <Footer />
    </>
  );
}
