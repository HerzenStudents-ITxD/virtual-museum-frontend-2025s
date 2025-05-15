import { useState, useRef, useEffect } from 'react';
import AdminHeader from "../components/AdminHeader";
import FileUpload from '../components/creation/FileUpload';
import './NewModelPage.css';
import doneIcon from '../../assets/icons/done.svg';
import triangleArrow from '../../assets/icons/triangle-arrow.svg';

const NewModelPage = () => {
  // Состояния формы
  const [title, setTitle] = useState('Введите название');
  const [description, setDescription] = useState('Введите описание');
  const [characteristics, setCharacteristics] = useState([]);
  const [modalOpen, setModalOpen] = useState(null);

  // Состояния фильтров
  const [filters, setFilters] = useState({
    region: 'Выбрать',
    district: 'Выбрать',
    place: 'Выбрать',
    ethnos: 'Выбрать'
  });
  const [activeFilter, setActiveFilter] = useState(null);
  const filtersRef = useRef({});

  // Опции фильтров
  const filterOptions = {
    region: ["Забайкальский край", "Камчатский край", "Республика Саха (Якутия)", "Ямало-Ненецкий автономный округ"],
    district: ["Алданский", "Быстринский", "Нерюнгринский", "Пуровский", "Тазовский"],
    place: ["Иенгра", "Самбург", "Село Анавгай", "Тазовский", "Чита", "Томмот", "Угоян", "Хатыстыр", "Школа-интернат \"Арктика\""],
    ethnos: ["Долганы", "Кеты", "Коряки", "Манси", "Нганасаны", "Ненцы", "Селькупы", "Ханты", "Чукчи", "Эвены", "Эвенки", "Юкагиры"]
  };

  // Закрытие фильтров при клике вне области
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!Object.values(filtersRef.current).some(ref => ref?.contains(e.target))) {
        setActiveFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Добавление характеристики
  const addCharacteristic = () => {
    if (characteristics.length < 2) {
      setCharacteristics([...characteristics, { name: '', value: '' }]);
    }
  };

  // Изменение характеристики
  const handleCharacteristicChange = (index, field, value) => {
    const newCharacteristics = [...characteristics];
    newCharacteristics[index][field] = value;
    setCharacteristics(newCharacteristics);
  };

  // Переключение фильтра
  const toggleFilter = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  // Выбор значения фильтра
  const selectFilterOption = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
    setActiveFilter(null);
  };

  return (
    <div className="new-model-page">
      <AdminHeader />
      
      <div className="model-creation-container">
        <div className="file-upload-wrapper">
          <FileUpload type="model" />
        </div>
        
        <div className="model-form-container">
          {/* Поле названия */}
          <input
            type="text"
            className="model-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => title === 'Введите название' && setTitle('')}
            onBlur={() => !title && setTitle('Введите название')}
          />
          
          {/* Поле описания */}
          <h3 className="description-label">Описание</h3>
          <textarea
            className="model-description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() => description === 'Введите описание' && setDescription('')}
            onBlur={() => !description && setDescription('Введите описание')}
          />
          
          {/* Характеристики */}
          {characteristics.map((char, index) => (
            <div key={index} className="characteristic-fields-m">
              <input
                type="text"
                className="characteristic-name-input-m"
                value={char.name}
                onChange={(e) => handleCharacteristicChange(index, 'name', e.target.value)}
                placeholder="Введите название характеристики"
              />
              <input
                type="text"
                className="characteristic-value-input"
                value={char.value}
                onChange={(e) => handleCharacteristicChange(index, 'value', e.target.value)}
                placeholder="Введите текст"
              />
            </div>
          ))}
          
          {/* Кнопка добавления характеристики */}
          {characteristics.length < 2 && (
            <button 
              className="add-characteristic-btn"
              onClick={addCharacteristic}
            >
              + Добавить характеристику
            </button>
          )}
          
          {/* Фильтры */}
          <div className="article-details">
            {Object.entries(filters).map(([key, value]) => (
              <div 
                key={key}
                className="detail-item"
                ref={el => filtersRef.current[key] = el}
              >
                <h3>
                  {key === 'place' ? 'Нас. пункт' : 
                   key === 'district' ? 'Район' : 
                   key === 'ethnos' ? 'Этнос' : 'Регион'}
                </h3>
                <div 
                  className="detail-value filter-select"
                  onClick={() => toggleFilter(key)}
                >
                  <span className="filter-select-text">{value}</span>
                  <div className={`filter-arrow ${activeFilter === key ? 'open' : ''}`}>
                    <img src={triangleArrow} alt="" />
                  </div>
                  
                  {/* Выпадающий список */}
                  {activeFilter === key && (
                    <div className="filter-dropdown">
                      {filterOptions[key].map(option => (
                        <div
                          key={option}
                          className="dropdown-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            selectFilterOption(key, option);
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Кнопки действий */}
      <div className="action-buttons">
        <button 
          className="save-draft"
          onClick={() => setModalOpen('draft')}
        >
          СОХРАНИТЬ ЧЕРНОВИК
        </button>
        <button 
          className="publish"
          onClick={() => setModalOpen('publish')}
        >
          ЗАГРУЗИТЬ НА САЙТ
        </button>
      </div>
      
      {/* Модальное окно */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon-text-container">
              <img src={doneIcon} alt="Успешно" className="modal-icon" />
              <div className="modal-text-container">
                <h2 className="modal-title">Успешно!</h2>
                <p className="modal-text">
                  Объект {modalOpen === 'draft' ? 'сохранен' : 'загружен'} <br />
                  {modalOpen === 'draft' ? 'в черновиках' : 'на сайт'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewModelPage;