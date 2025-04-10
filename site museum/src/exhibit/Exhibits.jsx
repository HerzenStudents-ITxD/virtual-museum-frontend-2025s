import api from "../Api";
import ExhibitPreview from "./ExhibitPreview";

export default function Exhibits() {
  const exhibits = api.requestExhibits();

  return (
    <div>
      {exhibits.map(exhibit => {
        return <ExhibitPreview
          id={exhibit.id}
          modelSrc={exhibit.modelSrc}
          title={exhibit.title}
        />;
      })}
    </div>
  );
}
