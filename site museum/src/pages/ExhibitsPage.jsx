import { useState, useEffect } from "react";
import api from "../Api";
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
        "Ямало-Ненецкий автономный округ"
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
        "Школа-интернат \"Арктика\""
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
  const [exhibits, setExhibits] = useState([]);
  const [filteredExhibits, setFilteredExhibits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await api.getExhibits();
        setExhibits(data);
        applyFilters(data, filters);
      } catch (error) {
        console.error("Error loading exhibits:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();

    const handleClickOutside = (e) => {
      if (!e.target.closest('.exhibits-filter')) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    applyFilters(exhibits, filters);
  }, [filters, exhibits]);

  const applyFilters = (exhibitsToFilter, currentFilters) => {
    const result = exhibitsToFilter.filter(exhibit => {
      return (
        (currentFilters.region === "Любой" || exhibit.region === currentFilters.region) &&
        (currentFilters.district === "Любой" || exhibit.district === currentFilters.district) &&
        (currentFilters.locality === "Любой" || exhibit.place === currentFilters.locality) &&
        (currentFilters.ethnicity === "Любой" || exhibit.ethnos === currentFilters.ethnicity)
      );
    });
    setFilteredExhibits(result);
  };

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
                    {config.options.map((option) => (
                      <div
                        key={option}
                        className="exhibits-dropdown-item"
                        onClick={() => handleFilterSelect(key, option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <section className="exhibits-content">
          {isLoading ? (
            <div className="exhibits-loading">Загрузка...</div>
          ) : (
            <div className="exhibits-grid">
              {filteredExhibits.map((exhibit) => (
                <ExhibitPreview
                  key={exhibit.id}
                  id={exhibit.id}
                  title={exhibit.title}
                  imgSrc={exhibit.main_photo || "/assets/sample-exhibit.png"}
                />
              ))}
              {filteredExhibits.length === 0 && !isLoading && (
                <div className="exhibits-no-results">
                  По выбранным фильтрам экспонатов не найдено
                </div>
              )}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ExhibitsPage;