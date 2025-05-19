import { useNavigate } from "react-router-dom";
import "./ArticleCard.css";
import arrowRight from "../../assets/icons/arrow-right.svg";

const ArticleCard = ({ id, title, image }) => {
  const navigate = useNavigate();

  return (
    <div className="article-card">
      <img 
        src={image} 
        alt={title} 
        className="article-card__image"
        width={255}
        height={182}
      />
      <div className="article-card__content">
        <h3 className="article-card__title">{title}</h3>
        <button
          className="article-card__button"
          onClick={() => navigate(`/culture/${id}`)}
        >
          ПОДРОБНЕЕ
          <img 
            src={arrowRight} 
            alt="→" 
            className="article-card__arrow" 
          />
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;