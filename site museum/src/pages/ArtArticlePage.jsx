import { useParams } from "react-router-dom";
import api from "../Api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArticleDetailCard from "../components/ArticleCard/ArticleDetailCard"; 
import "./ArtArticlePage.css"; 
import { useEffect, useState } from "react";

const ArtArticlePage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

  return (
    <>
      <div className="art-article-page">
        <Header isHeroHeader={false} />
        <div className="art-article-container">
          <ArticleDetailCard data={data} /> {}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtArticlePage; 