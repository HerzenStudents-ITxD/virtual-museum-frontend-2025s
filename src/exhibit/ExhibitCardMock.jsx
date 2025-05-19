import React, { useState } from 'react';
import sampleExhibit from '../assets/sample-exhibit.png';
import wideningArrow from '../assets/icons/widening-arrow.svg';
import './ExhibitCardMock.css';

const ExhibitCardMock = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className="exhibit-card">
      {/* Основная карточка экспоната */}
      <div className="exhibit-photo-container">
        <img 
          src={data.main_photo} 
          alt={data.title} 
          className="exhibit-photo"
        />
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

      <div className="exhibit-info">
        <h1 className="exhibit-title">{data.title}</h1>
        
        <div className="exhibit-description">
          <h2>Описание</h2>
          <p>{data.desc}</p>
        </div>

        <div className="exhibit-details">
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

      {/* Модальное окно для увеличенного просмотра */}
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

export default ExhibitCardMock;