import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import api from "../Api";
import "./ArtCulturePage.css";

const ArtCulturePage = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState(null); // фильтр по типу статьи

  useEffect(() => {
    api.getCultureArticles().then(setArticles);
  }, []);

  const handleFilter = (type) => {
    setFilter(type === filter ? null : type); // сброс, если нажать на активный фильтр
  };

  // Фильтрация статей
  const filteredArticles = filter
    ? articles.filter(article => article.type === filter)
    : articles;

  return (
    <>
      <div className="art-culture-page">
        <Header isHeroHeader={false} />

        <div className="culture-header-container">
          <h1 className="culture-main-heading">Художественная культура</h1>
          
          <div className="culture-categories-container">
            <div
              className={`culture-category ${filter === "Декоративно-прикладное искусство" ? "active" : ""}`}
              onClick={() => handleFilter("Декоративно-прикладное искусство")}
            >
              <h2 className="culture-category-title">Декоративно-прикладное искусство</h2>
            </div>
            <div
              className={`culture-category ${filter === "Устное народное творчество" ? "active" : ""}`}
              onClick={() => handleFilter("Устное народное творчество")}
            >
              <h2 className="culture-category-title">Устное народное творчество</h2>
            </div>
            <div
              className={`culture-category ${filter === "Танцевально-музыкальная культура" ? "active" : ""}`}
              onClick={() => handleFilter("Танцевально-музыкальная культура")}
            >
              <h2 className="culture-category-title">Танцевально-музыкальная культура</h2>
            </div>
          </div>
        </div>

        <section className="culture-content">
          <div className="articles-grid">
            {filteredArticles.map(article => (
              <ArticleCard
                key={article.id}
                title={article.title}
                image={article.main_photo}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ArtCulturePage;
