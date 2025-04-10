import { useParams } from "react-router-dom";
import ExhibitCard from "./ExhibitCard.jsx"

export default function Exhibit() {
  const { id } = useParams();

  return (
    <ExhibitCard id={id} />
  );
}
