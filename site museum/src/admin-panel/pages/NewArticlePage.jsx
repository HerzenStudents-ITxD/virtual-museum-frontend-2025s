import { useState, useRef, useEffect } from 'react';
import AdminHeader from "../components/AdminHeader";
import FileUpload from '../components/creation/FileUpload';
import './NewArticlePage.css';
import doneIcon from '../../assets/icons/done.svg';
import triangleArrow from '../../assets/icons/triangle-arrow.svg';

const NewArticlePage = () => {
  // Состояния формы
  const [title, setTitle] = useState('Введите название');
  const [description, setDescription] = useState('Введите описание');
  const [mainCharacteristics, setMainCharacteristics] = useState([]); // Для зеленой плашки
  const [additionalFields, setAdditionalFields] = useState([]); // Для серой плашки
  const [modalOpen, setModalOpen] = useState(null);
  const categoryDropdownRef = useRef(null);

  // Состояния фильтров
  const [filters, setFilters] = useState({
    region: 'Выбрать',
    district: 'Выбрать',
    place: 'Выбрать',
    ethnos: 'Выбрать'
  });
  const [activeFilter, setActiveFilter] = useState(null);
  const filtersRef = useRef({});

  // Материалы и дополнительная информация
  const [materials, setMaterials] = useState({
    audio: false,
    video: false,
    gallery: false
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    genre: '',
    name: '',
    date: '',
    collectors: '',
    categories: []
  });
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // Опции фильтров
  const filterOptions = {
    region: ["Забайкальский край", "Камчатский край", "Республика Саха (Якутия)", "Ямало-Ненецкий автономный округ"],
    district: ["Алданский", "Быстринский", "Нерюнгринский", "Пуровский", "Тазовский"],
    place: ["Иенгра", "Самбург", "Село Анавгай", "Тазовский", "Чита", "Томмот", "Угоян", "Хатыстыр", "Школа-интернат \"Арктика\""],
    ethnos: ["Долганы", "Кеты", "Коряки", "Манси", "Нганасаны", "Ненцы", "Селькупы", "Ханты", "Чукчи", "Эвены", "Эвенки", "Юкагиры"]
  };

  // Категории
  const categoryOptions = [
    "Традиционная культура жизнеобеспечения",
    "Жилище",
    "Материалы экспедиций",
    "Публикации",
    "Художественная культура",
    "Декоративно-прикладное искусство",
    "Предметы быта",
    "Устное народное творчество",
    "Языковые материалы",
    "Аудио материалы",
    "Видео материалы",
    "Одежда",
    "Религиозная культура",
    "Предметы культа",
    "Шаманизм"
  ];

  // Закрытие фильтров при клике вне области
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!Object.values(filtersRef.current).some(ref => ref?.contains(e.target))) {
        setActiveFilter(null);
      }
      
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(e.target)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Добавление характеристики в зеленую плашку
  const addMainCharacteristic = () => {
    setMainCharacteristics([...mainCharacteristics, {id: Date.now(), name: '', value: ''}]);
  };

  // Добавление характеристики в серую плашку
  const addAdditionalCharacteristic = () => {
    setAdditionalFields([...additionalFields, {id: Date.now(), name: '', value: ''}]);
  };

  // Изменение характеристики в зеленой плашке
  const handleMainCharacteristicChange = (index, field, value) => {
    const newCharacteristics = [...mainCharacteristics];
    newCharacteristics[index][field] = value;
    setMainCharacteristics(newCharacteristics);
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

  // Загрузка материалов
  const handleMaterialClick = (type) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = type === 'audio' ? 'audio/*' : 
                   type === 'video' ? 'video/*' : 'image/*';
    input.onchange = (e) => {
      if (e.target.files.length > 0) {
        setMaterials({...materials, [type]: true});
      }
    };
    input.click();
  };

  // Удаление категории
  const removeCategory = (category) => {
    setAdditionalInfo({
      ...additionalInfo,
      categories: additionalInfo.categories.filter(c => c !== category)
    });
  };

  return (
    <div className="new-article-page">
      <AdminHeader />
      
      <div className="model-creation-container">
        <div className="file-upload-wrapper">
          <FileUpload type="article" />
        </div>
        
        <div className="model-form-container">
          <input
            type="text"
            className="model-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => title === 'Введите название' && setTitle('')}
            onBlur={() => !title && setTitle('Введите название')}
          />
          
          <h3 className="description-label">Описание</h3>
          <textarea
            className="model-description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() => description === 'Введите описание' && setDescription('')}
            onBlur={() => !description && setDescription('Введите описание')}
          />
          
          {mainCharacteristics.map((char, index) => (
            <div key={index} className="characteristic-fields">
              <input
                type="text"
                className="characteristic-name-input-a"
                value={char.name}
                onChange={(e) => handleMainCharacteristicChange(index, 'name', e.target.value)}
                placeholder="Введите название характеристики"
              />
              <input
                type="text"
                className="characteristic-value-input-a"
                value={char.value}
                onChange={(e) => handleMainCharacteristicChange(index, 'value', e.target.value)}
                placeholder="Введите текст"
              />
            </div>
          ))}
          
          {mainCharacteristics.length < 2 && (
            <button 
              className="add-characteristic-btn"
              onClick={addMainCharacteristic}
            >
              + Добавить характеристику
            </button>
          )}
          
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

      {/* Вторая зеленая плашка - Добавить материалы */}
      <div className="materials-container">
        <h2 className="materials-heading">Добавить материалы</h2>
        <div className="material-buttons">
          <button 
            className="material-button" 
            onClick={() => handleMaterialClick('audio')}
          >
            АУДИО {materials.audio && <span className="uploaded-mark">*загружено</span>}
          </button>
          <button 
            className="material-button" 
            onClick={() => handleMaterialClick('video')}
          >
            ВИДЕО {materials.video && <span className="uploaded-mark">*загружено</span>}
          </button>
          <button 
            className="material-button" 
            onClick={() => handleMaterialClick('gallery')}
          >
            ГАЛЕРЕЯ {materials.gallery && <span className="uploaded-mark">*загружено</span>}
          </button>
        </div>
      </div>

      {/* Серая плашка - Дополнительно */}
      <div className="additional-info-container">
        <h2 className="additional-info-heading">Дополнительно</h2>
        
        <div className="two-columns-container">
          <div className="left-column">
            <h3 className="info-label">Жанр</h3>
            <h3 className="info-label">Название</h3>
            <h3 className="info-label">Дата</h3>
            <h3 className="info-label">Собиратели</h3>
            <div className="categories-label-container">
              <h3 className="info-label">Категории</h3>
            </div>
            
            {/* Добавленные характеристики */}
            {additionalFields.map(field => (
              <input
                key={`left-${field.id}`}
                type="text"
                value={field.name}
                onChange={(e) => {
                  const updated = additionalFields.map(f => 
                    f.id === field.id ? {...f, name: e.target.value} : f
                  );
                  setAdditionalFields(updated);
                }}
                placeholder="Название"
                className="characteristic-name-input"
              />
            ))}
          </div>
          
          <div className="right-column">
            <input 
              type="text" 
              value={additionalInfo.genre}
              onChange={(e) => setAdditionalInfo({...additionalInfo, genre: e.target.value})}
              placeholder="введите текст"
              className="additional-input"
            />
            <input 
              type="text" 
              value={additionalInfo.name}
              onChange={(e) => setAdditionalInfo({...additionalInfo, name: e.target.value})}
              placeholder="введите текст"
              className="additional-input"
            />
            <input 
              type="text" 
              value={additionalInfo.date}
              onChange={(e) => setAdditionalInfo({...additionalInfo, date: e.target.value})}
              placeholder="введите текст"
              className="additional-input"
            />
            <input 
              type="text" 
              value={additionalInfo.collectors}
              onChange={(e) => setAdditionalInfo({...additionalInfo, collectors: e.target.value})}
              placeholder="введите текст"
              className="additional-input"
            />
            
            <div className="categories-wrapper">
              <div className="categories-container" ref={categoryDropdownRef}>
                {additionalInfo.categories.map((category, index) => (
                  <div key={index} className="selected-category">
                    {category}
                    <span 
                      className="remove-category"
                      onClick={() => removeCategory(category)}
                    >
                      ×
                    </span>
                  </div>
                ))}
                <button 
                  className="add-category-btn"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                >
                  + Добавить категорию
                </button>
                
                {showCategoryDropdown && (
                  <div className="category-dropdown">
                    {categoryOptions.map(category => (
                      <div 
                        key={category}
                        className="dropdown-item"
                        onClick={() => {
                          if (!additionalInfo.categories.includes(category)) {
                            setAdditionalInfo({
                              ...additionalInfo,
                              categories: [...additionalInfo.categories, category]
                            });
                          }
                          setShowCategoryDropdown(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Поля для добавленных характеристик */}
            {additionalFields.map(field => (
              <input
                key={`right-${field.id}`}
                type="text"
                placeholder="введите текст"
                className="additional-input"
                value={field.value}
                onChange={(e) => {
                  const updated = additionalFields.map(f => 
                    f.id === field.id ? {...f, value: e.target.value} : f
                  );
                  setAdditionalFields(updated);
                }}
              />
            ))}
          </div>
        </div>
        
        <button 
          className="add-characteristic-btn-2"
          onClick={addAdditionalCharacteristic}
        >
          + Добавить характеристику
        </button>
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

export default NewArticlePage;