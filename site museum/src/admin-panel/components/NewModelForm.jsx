import "./NewModelForm.css";
import PlusIcon from "../../assets/icons/plus.svg";

const NewModelForm = () => {
  return (
    <div className="new-model-form">
      <div className="model-preview-container">
        <img 
          src={PlusIcon} 
          alt="Plus" 
          className="model-plus-icon"
          style={{ opacity: 0.7 }}
        />
      </div>
      <div className="model-title">НОВАЯ 3D-МОДЕЛЬ</div>
      <button className="model-add-button">
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

export default NewModelForm;