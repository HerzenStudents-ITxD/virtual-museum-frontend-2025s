import { useState } from 'react';
import EyeOpenIcon from '../../assets/icons/eye-open-2.svg';
import EyeCloseIcon from '../../assets/icons/eye-close-2.svg';
import TrashIcon from '../../assets/icons/trash-can.svg';
import EditIcon from '../../assets/icons/redaction.svg';
import './ExhibitCard.css';

const ExhibitCard = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="exhibit-card-custom">
      {/* Превью (заглушка) */}
      <div className="exhibit-preview-custom">
        <div className="preview-placeholder">
          [Загрузка...]
        </div>
      </div>

      {/* Текстовый блок */}
      <div className="exhibit-text-custom">
        <p>{data.title}</p>
      </div>

      {/* Кнопки управления */}
      <div className="exhibit-actions-custom">
        {/* Кнопка видимости */}
        <button 
          className={`visibility-button ${isVisible ? 'active' : ''}`}
          onClick={() => setIsVisible(!isVisible)}
        >
          <img 
            src={isVisible ? EyeOpenIcon : EyeCloseIcon} 
            alt={isVisible ? "Скрыть" : "Показать"} 
          />
        </button>

        {/* Кнопка удаления */}
        <button 
          className="delete-button"
          onClick={() => setShowDeleteModal(true)}
        >
          <img src={TrashIcon} alt="Удалить" />
        </button>

        {/* Кнопка редактирования */}
        <button className="edit-button">
          <img src={EditIcon} alt="Редактировать" />
        </button>
      </div>

      {/* Модальное окно удаления */}
      {showDeleteModal && (
        <div className="delete-modal-overlay">
          <div className="delete-modal">
            <img src={TrashIcon} className="modal-trash-icon" alt="" />
            <h3>Удалить объект?</h3>
            <div className="modal-buttons">
              <button className="confirm-delete">УДАЛИТЬ</button>
              <button 
                className="cancel-delete"
                onClick={() => setShowDeleteModal(false)}
              >
                ОТМЕНИТЬ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExhibitCard;