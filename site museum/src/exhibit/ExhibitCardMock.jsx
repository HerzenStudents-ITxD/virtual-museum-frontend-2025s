import React, { useState } from 'react';
import sampleExhibit from '../assets/sample-exhibit.png';
import wideningArrow from '../assets/icons/widening-arrow.svg';
import './ExhibitCardMock.css';

const ExhibitCardMock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const exhibitData = {
    main_photo: sampleExhibit,
    title: "Макет девушки в ненецкой ягушке",
    description: "Ягушка (мен. мой паны) – традиционная ненецкая одежда. Летний вариант.",
    details: {
      region: "ЯМАЛО-НЕНЕЦКИЙ АВТОНОМНЫЙ ОКРУГ",
      district: "ТАЗОВСКИЙ",
      place: "ТАЗОВСКИЙ",
      ethnos: "НЕНЦЫ"
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(false);
  };

  if (error) {
    return <div className="error-message">Произошла ошибка при загрузке экспоната</div>;
  }

  return (
    <div className="exhibit-card">
      {/* Основная карточка экспоната */}
      <div className="exhibit-photo-container">
        <img 
          src={exhibitData.main_photo} 
          alt={exhibitData.title} 
          className="exhibit-photo"
          onError={() => setError(new Error('Не удалось загрузить изображение'))}
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
            onError={() => setError(new Error('Не удалось загрузить иконку'))}
          />
        </button>
      </div>

      <div className="exhibit-info">
        <h1 className="exhibit-title">{exhibitData.title}</h1>
        
        <div className="exhibit-description">
          <h2>Описание</h2>
          <p>{exhibitData.description}</p>
        </div>

        <div className="exhibit-details">
          <div className="detail-item">
            <h3>Регион</h3>
            <div className="detail-value">{exhibitData.details.region}</div>
          </div>
          <div className="detail-item">
            <h3>Район</h3>
            <div className="detail-value">{exhibitData.details.district}</div>
          </div>
          <div className="detail-item">
            <h3>Нас. пункт</h3>
            <div className="detail-value">{exhibitData.details.place}</div>
          </div>
          <div className="detail-item">
            <h3>Этнос</h3>
            <div className="detail-value">{exhibitData.details.ethnos}</div>
          </div>
        </div>
      </div>

      {/* Модальное окно для увеличенного просмотра */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={exhibitData.main_photo} 
              alt={`Увеличенное фото: ${exhibitData.title}`}
              className="enlarged-photo"
              onError={() => {
                setError(new Error('Не удалось загрузить увеличенное изображение'));
                closeModal();
              }}
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