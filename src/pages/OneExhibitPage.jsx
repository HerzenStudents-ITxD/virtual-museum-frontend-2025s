import { useParams } from "react-router-dom";
import api from "../Api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ExhibitCardMock from "../exhibit/ExhibitCardMock";
import "./OneExhibitPage.css";
import { useEffect, useState } from "react";

const OneExhibitPage = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    api.getExhibit(id).then(setData);
  }, []);

  if (data !== null) {
    return (
      <>
        <div className="one-exhibit-page">
          <Header isHeroHeader={false} />

          <div className="one-exhibit-container">
            <ExhibitCardMock data={data} /> 
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default OneExhibitPage;