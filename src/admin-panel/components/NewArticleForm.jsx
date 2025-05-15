import "./NewArticleForm.css";
import PlusIcon from "../../assets/icons/plus.svg"; 
import { Link } from 'react-router-dom';

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

      <Link
        to="/articlecreate"
        className="form-add-button"
      >
        ДОБАВИТЬ
        <img 
          src={PlusIcon} 
          alt="Plus" 
          className="button-plus-icon"
        />
      </Link>
    </div>
  );
};

export default NewArticleForm;