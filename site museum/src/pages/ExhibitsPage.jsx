import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ExhibitsPage.css";
import ExhibitPreview from "../exhibit/ExhibitPreview";

const ExhibitsPage = () => {
  const filterOptions = {
    region: {
      title: "Регион",
      options: [
        "Любой",
        "Забайкальский край",
        "Камчатский край",
        "Республика Саха (Якутия)",
        { text: "Ямало-Ненецкий автономный округ", multiline: true }
      ],
      default: "Любой"
    },
    district: {
      title: "Район",
      options: [
        "Любой",
        "Алданский",
        "Быстринский",
        "Нерюнгринский",
        "Пуровский",
        "Тазовский"
      ],
      default: "Любой"
    },
    locality: {
      title: "Населенный пункт",
      options: [
        "Любой",
        "Иенгра",
        "Самбург",
        "Село Анавгай",
        "Тазовский",
        "Чита",
        "Томмот",
        "Угоян",
        "Хатыстыр",
        { text: "Школа-интернат \"Арктика\"", multiline: true }
      ],
      default: "Любой"
    },
    ethnicity: {
      title: "Этнос",
      options: [
        "Любой",
        "Долганы",
        "Кеты",
        "Коряки",
        "Манси",
        "Нганасаны",
        "Ненцы",
        "Селькупы",
        "Ханты",
        "Чукчи",
        "Эвены",
        "Эвенки",
        "Юкагиры"
      ],
      default: "Любой"
    }
  };

  const [filters, setFilters] = useState({
    region: filterOptions.region.default,
    district: filterOptions.district.default,
    locality: filterOptions.locality.default,
    ethnicity: filterOptions.ethnicity.default
  });

  const [openFilter, setOpenFilter] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.exhibits-filter')) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterToggle = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleFilterSelect = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
    setOpenFilter(null);
  };

  return (
    <>
      <div className="exhibits-page">
        <Header isHeroHeader={false} />
        
        <div className="exhibits-header-container">
          <h1 className="exhibits-main-heading">3D-экспонаты</h1>
          
          <div className="exhibits-filters-container">
            {Object.entries(filterOptions).map(([key, config]) => (
              <div className="exhibits-filter" key={key}>
                <h2 className="exhibits-filter-title">{config.title}</h2>
                <div 
                  className="exhibits-filter-option"
                  onClick={() => handleFilterToggle(key)}
                >
                  <span className="exhibits-filter-option-text">{filters[key]}</span>
                  <div className={`exhibits-filter-arrow ${openFilter === key ? "open" : ""}`}></div>
                </div>
                
                {openFilter === key && (
                  <div className={`exhibits-dropdown ${openFilter === key ? "show" : ""}`}>
                    {config.options.map((option) => {
                      const optionText = typeof option === 'object' ? option.text : option;
                      const isMultiline = typeof option === 'object' && option.multiline;
                      
                      return (
                        <div
                          key={optionText}
                          className={`exhibits-dropdown-item ${isMultiline ? "multiline" : ""}`}
                          onClick={() => handleFilterSelect(key, optionText)}
                        >
                          {optionText}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <section className="exhibits-content">
            <div className="exhibits-grid">
             {[...Array(8)].map((_, i) => (
                    <ExhibitPreview
                        key={i}
                        id={i+1}
                        title="Макет девушки, одетой в ненецкую ягушку"
                        imgSrc="/assets/sample-exhibit.png"
                    />
             ))}
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ExhibitsPage;