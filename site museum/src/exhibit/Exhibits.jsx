import { useEffect, useState } from "react";

import api from "../Api";
import ExhibitPreview from "./ExhibitPreview";

export default function Exhibits() {
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    api.getExhibits().then(setExhibits);
  }, []);

  return (
    <div>
      {exhibits.map(exhibit => {
        return <ExhibitPreview
          key={exhibit.id}
          id={exhibit.id}
          title={exhibit.title}
          imgSrc={exhibit.main_photo}
        />;
      })}
    </div>
  );
}
