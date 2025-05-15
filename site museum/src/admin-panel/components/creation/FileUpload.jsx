import { useState } from 'react';
import PlusIcon from '../../../assets/icons/plus.svg';
import './FileUpload.css';

const FileUpload = ({ type }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Обработка загруженных файлов
  };

  return (
    <div 
      className={`file-upload ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-input').click()}
    >
      <div className="upload-content">
        <img 
          src={PlusIcon} 
          alt="Plus" 
          className="upload-icon"
        />
        <p className="upload-text">
          {type === 'model' ? 'Загрузите 3D модель' : 'Загрузите изображение'}
        </p>
        {/* <p className="formats-text">
          {type === 'model' ? 'Форматы: .glb, .fbx, .obj' : 'Форматы: .png, .jpg, .svg'}
        </p> */}
      </div>
      <input 
        id="file-input"
        type="file" 
        accept={type === 'model' ? '.glb,.fbx,.obj' : '.png,.jpg,.jpeg,.svg'} 
        hidden
      />
    </div>
  );
};

export default FileUpload;