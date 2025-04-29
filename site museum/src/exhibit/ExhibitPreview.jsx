import { useNavigate } from "react-router";

export default function ExhibitPreview({ id, title, imgSrc }) {
  const navigate = useNavigate();

  return (
    <div>
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <button onClick={() => navigate(`/exhibits/${id}`)}>Подробнее</button>
    </div>
  );
}
