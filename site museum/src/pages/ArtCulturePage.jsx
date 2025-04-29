import React from "react";
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
            {/* Первая строка */}
            <ArticleCard 
              title="Вануйто Анна Епонина Песня от Ядне Леонида" 
              image={article1} 
            />
            <ArticleCard 
              title="Вакуйте Анна Епонина Колыбельная от Ядне (Пуйко)" 
              image={article2} 
            />

            {/* Вторая строка */}
            <ArticleCard 
              title="Вакуйте Анна Епонина Песня о Вакане Салиндер" 
              image={article3} 
            />
            <ArticleCard 
              title="Кириллова Маргарита Степановна Колыбельная" 
              image={article4}  
            />

            {/* Третья строка */}
            <ArticleCard 
              title={'Кириллова Маргарита Степановна\nЗапев хоровода "Манчора"'}
              image={article5} 
            />
            <ArticleCard 
              title={"Кириллова Маргарита Степановна\nСказка о выборе помощников"} 
              image={article6} 
            />

            {/* Четвертая строка */}
            <ArticleCard 
              title="Детский костюм" 
              image={article7} 
            />
            <ArticleCard 
              title="Национальный сценический костюм" 
              image={article8}  
            />

            {/* Пятая строка */}
            <ArticleCard 
              title="Кумалан. Коврик." 
              image={article9} 
            />
            <ArticleCard 
              title="Кумалан. Коврик." 
              image={article10} 
            />

            {/* Шестая строка */}
            <ArticleCard 
              title={'Ансамбль "Дэлача"'}
              image={article11} 
            />
            <ArticleCard 
              title={'Танец "Сядотако"'} 
              image={article12} 
            />
          </div>
        </section>
      </div>
        <Footer />
    </>
  );
};

export default ArtCulturePage;