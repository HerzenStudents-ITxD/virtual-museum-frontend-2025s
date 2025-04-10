import { useParams } from "react-router-dom";

export default function CultureArticle() {
  const { id } = useParams();
  return <h1>Culture article #{id}</h1>;
}
