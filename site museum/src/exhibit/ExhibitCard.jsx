import { useEffect, useState } from "react";

import api from "../Api"

export default function ExhibitCard({ id }) {
  const [exhibit, setExhibit] = useState(null);

  useEffect(() => {
    api.getExhibit(id).then(setExhibit);
  }, []);

  if (exhibit !== null) {
    return (
      <div>
        <img src={exhibit.main_photo} alt={exhibit.title} />

        <div>
          <h1>{exhibit.title}</h1>

          <h2>Описание</h2>
          <p>{exhibit.desc}</p>

          <h2>Регион</h2>
          <p>{exhibit.region}</p>

          <h2>Район</h2>
          <p>{exhibit.district}</p>

          <h2>Нас. пункт</h2>
          <p>{exhibit.place}</p>

          <h2>Этнос</h2>
          <p>{exhibit.ethnos}</p>
        </div>
      </div>
    );
  }
}

