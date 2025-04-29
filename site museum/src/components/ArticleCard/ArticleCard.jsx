import React from "react";
import "./ArticleCard.css";
import arrowRight from "../../assets/icons/arrow-right.svg";

const ArticleCard = ({ title, image }) => {
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
        <button className="article-card__button">
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