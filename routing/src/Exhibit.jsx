import { useParams } from "react-router-dom";

export default function Exhibit() {
  const { id } = useParams();
  return <h1>Exhibit #{id}</h1>;
}
