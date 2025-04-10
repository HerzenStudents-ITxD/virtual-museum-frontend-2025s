import { useNavigate } from "react-router";
import ExhibitModel from "./ExhibitModel";

export default function ExhibitPreview({ id, modelSrc, title }) {
  const navigate = useNavigate();

  return (
    <div>
      <ExhibitModel src={modelSrc} />
      <h4>Title</h4>
      <button onClick={() => navigate(`/exhibits/${id}`)}>Подробнее</button>
    </div>
  );
}
