import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ExhibitCardMock from "../exhibit/ExhibitCardMock";
import "./OneExhibitPage.css";

const OneExhibitPage = () => {
  return (
    <>
      <div className="one-exhibit-page">
        <Header isHeroHeader={false} />
        <div className="one-exhibit-container">
          <ExhibitCardMock /> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OneExhibitPage;