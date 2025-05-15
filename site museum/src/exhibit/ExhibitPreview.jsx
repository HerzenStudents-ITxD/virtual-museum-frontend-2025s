import { useNavigate } from "react-router";
import "./ExhibitPreview.css";

export default function ExhibitPreview({ id, title, imgSrc }) {
  const navigate = useNavigate();

  return (
    <div className="exhibit-preview">
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <button onClick={() => navigate(`/exhibits/${id}`)}>Подробнее</button>
    </div>
  );
}
