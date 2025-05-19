import { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import ExhibitCard from "../components/ExhibitCard";
import ArticleCard from "../components/ArticleCard";
import NewModelForm from "../components/NewModelForm";
import NewArticleForm from "../components/NewArticleForm";
import "./ContentManagerPage.css";
import api from "../../Api";

const ContentManagerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("3D-модели");
  
  const categories = [
    "3D-модели",
    "Художественная культура",
    "Религиозная культура",
    "Культура жизнеобеспечения",
    "Языковые материалы",
    "Материалы экспедиций"
  ];

  // Статусы (второй фильтр)
  const [selectedStatus, setSelectedStatus] = useState(null);
  const statuses = ["ЧЕРНОВИКИ", "СКРЫТОЕ", "ВЫЛОЖЕННОЕ"];

  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    api.getExhibits().then(exhibits => setExhibits(exhibits.toReversed()));
  }, []);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.getArticles().then(articles => setArticles(articles.toReversed()));
  }, []);

  // Функция для переключения статуса
  const toggleStatus = (status) => {
    setSelectedStatus(selectedStatus === status ? null : status);
  };

  // Заглушка для кнопок
  const handleAddClick = () => {
    console.log("Переход на страницу создания будет реализован позже");
    // Здесь будет редирект на другую страницу
  };

  return (
    <div className="admin-content-page">
      <AdminHeader />
      
      <main className="content-manager-container">
        {/* Первая зеленая плашка с категориями внутри */}
        <div className="category-header">
          <h1>Выбрать категорию</h1>
          <div className="categories-container">
            {categories.map(category => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Вторая зеленая плашка */}
        <div className="status-header">
          <div className="status-buttons-container">
            {statuses.map(status => (
              <button
                key={status}
                className={`status-button ${selectedStatus === status ? "active" : ""}`}
                onClick={() => toggleStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Контент */}
        <div className="content-area">
          {selectedCategory === "3D-модели" ? (
            <>
            <div className="models-grid">
                <NewModelForm onClick={handleAddClick} />
                {exhibits.map(model => (
                    <ExhibitCard key={model.id} data={model} />
                ))}
            </div>
            </>
          ) : (
            <>
              <NewArticleForm onClick={handleAddClick} />
              <div className="articles-list">
                {articles.map(article => (
                  <ArticleCard key={article.id} data={article} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ContentManagerPage;