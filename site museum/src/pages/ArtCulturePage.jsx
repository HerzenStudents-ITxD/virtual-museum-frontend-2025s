import { useEffect, useState } from "react";
import api from "../Api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import "./ArtCulturePage.css";

// Импортируем изображения
import article1 from "../assets/articles/article1.png";
import article2 from "../assets/articles/article2.png";
import article3 from "../assets/articles/article3.png";
import article4 from "../assets/articles/article4.png";
import article5 from "../assets/articles/article5.png";
import article6 from "../assets/articles/article6.png";
import article7 from "../assets/articles/article7.png";
import article8 from "../assets/articles/article8.png";
import article9 from "../assets/articles/article9.png";
import article10 from "../assets/articles/article10.png";
import article11 from "../assets/articles/article11.png";
import article12 from "../assets/articles/article12.png";

const ArtCulturePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.getCultureArticles().then(setArticles);
  }, []);

  return (
    <>
      {/* Основной контейнер страницы */}
      <div className="art-culture-page">
        {/* Хедер */}
        <Header isHeroHeader={false} />
        
        {/* Зеленая плашка с контентом */}
        <div className="culture-header-container">
          <h1 className="culture-main-heading">Художественная культура</h1>
          
          {/* Три плашки с категориями */}
          <div className="culture-categories-container">
            <div className="culture-category">
              <h2 className="culture-category-title">Декоративно-прикладное искусство</h2>
            </div>
            <div className="culture-category">
              <h2 className="culture-category-title">Устное народное творчество</h2>
            </div>
            <div className="culture-category">
              <h2 className="culture-category-title">Танцевально-музыкальная культура</h2>
            </div>
          </div>
        </div>

        <section className="culture-content">
        <div className="articles-grid">
            {articles.map(article => {
              return (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  image={article.main_photo}
                />
              );
            })}
          </div>
        </section>
      </div>
        <Footer />
    </>
  );
};

export default ArtCulturePage;