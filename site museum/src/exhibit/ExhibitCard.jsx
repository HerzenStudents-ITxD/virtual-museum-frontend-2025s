import ExhibitModel from "./ExhibitModel";
import ExhibitDescription from "./ExhibitDescription";
import api from "../Api"

export default function ExhibitCard({ id }) {
  const exhibit = api.requestExhibit(id);

  if (exhibit !== null) {
    return (
      <div>
        <ExhibitModel src={exhibit.modelSrc} />
        <ExhibitDescription description={exhibit.description} />
      </div>
    );
  }
}

