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

  return (
    <div className="article-card">
      <div className="article-photo-container">
        {/* <img 
          src={data.main_photo} 
          alt={data.title} 
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
        <h1 className="article-title">{data.title}</h1>
        
        <div className="article-description">
          <h2>{data.desc}</h2>
          <p>{data.description}</p>
        </div>

        <div className="article-details">
          <div className="detail-item">
            <h3>Регион</h3>
            <div className="detail-value">{data.region}</div>
          </div>
          <div className="detail-item">
            <h3>Район</h3>
            <div className="detail-value">{data.district}</div>
          </div>
          <div className="detail-item">
            <h3>Нас. пункт</h3>
            <div className="detail-value">{data.place}</div>
          </div>
          <div className="detail-item">
            <h3>Этнос</h3>
            <div className="detail-value">{data.ethnos}</div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={data.main_photo} 
              alt={`Увеличенное фото: ${data.title}`}
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