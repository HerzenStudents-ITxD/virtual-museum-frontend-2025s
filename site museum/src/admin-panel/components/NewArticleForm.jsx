import "./NewArticleForm.css";
import PlusIcon from "../../assets/icons/plus.svg"; 

const NewArticleForm = () => {
  return (
    <div className="new-article-form">
      <div className="form-plus-container">
        <img 
          src={PlusIcon} 
          alt="Plus" 
          className="plus-icon"
          style={{ opacity: 0.7 }}
        />
      </div>
      <div className="form-title">НОВАЯ СТАТЬЯ</div>
      <button className="form-add-button">
        ДОБАВИТЬ
        <img 
          src={PlusIcon} 
          alt="Plus" 
          className="button-plus-icon"
        />
      </button>
    </div>
  );
};

export default NewArticleForm;