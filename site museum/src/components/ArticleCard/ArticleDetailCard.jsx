import React, { useState } from 'react';
//import article1_main from '../../assets/articles/article1_main.png'; 
import wideningArrow from '../../assets/icons/widening-arrow.svg';
import './ArticleDetailCard.css';

const ArticleDetailCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(false);
  };

  // Временные данные для теста 
  const testData = {
    title: "Вануйто Анна Еполивна",
    description: "Песня, услышанная от Ядне Леонида (п. Находка, Тазовский район, ЯНАО) в 1970-х гг.",
    region: "Ямало-Ненецкий автономный округ",
    district: "Пуровский",
    place: "Самбург",
    ethnos: "Ненцы",
    //main_photo: "/articles/article1_main.png"
  };

  // тестовые данные
  const displayData = data || testData;

  return (
    <div className="article-card">
      <div className="article-photo-container">
        {/* <img 
          src={displayData.main_photo} 
          alt={displayData.title} 
          className="article-photo"
        /> */}
        <div className="article-photo-placeholder">
          <span>Изображение статьи</span>
        </div>

        <button 
          className="expand-button"
          onClick={openModal}
          aria-label="Увеличить фотографию"
        >
          <img 
            src={wideningArrow} 
            alt="" 
            className="expand-icon"
          />
        </button>
      </div>

      <div className="article-info">
        <h1 className="article-title">{displayData.title}</h1>
        
        <div className="article-description">
          <h2>Описание</h2>
          <p>{displayData.description}</p>
        </div>

        <div className="article-details">
          <div className="detail-item">
            <h3>Регион</h3>
            <div className="detail-value">{displayData.region}</div>
          </div>
          <div className="detail-item">
            <h3>Район</h3>
            <div className="detail-value">{displayData.district}</div>
          </div>
          <div className="detail-item">
            <h3>Нас. пункт</h3>
            <div className="detail-value">{displayData.place}</div>
          </div>
          <div className="detail-item">
            <h3>Этнос</h3>
            <div className="detail-value">{displayData.ethnos}</div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={displayData.main_photo} 
              alt={`Увеличенное фото: ${displayData.title}`}
              className="enlarged-photo"
            />
            <button 
              className="modal-close-button"
              onClick={closeModal}
              aria-label="Закрыть"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetailCard;