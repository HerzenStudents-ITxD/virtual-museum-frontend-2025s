import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Exhibits from "./exhibit/Exhibits";
import Exhibit from "./exhibit/Exhibit";
import Culture from "./Culture";
import CultureArticle from "./CultureArticle";
import ArtCulturePage from "./pages/ArtCulturePage";
import ExhibitsPage from "./pages/ExhibitsPage";
import OneExhibitPage from "./pages/OneExhibitPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="exhibits">
          <Route index element={<Exhibits />} />
          <Route path=":id" element={<Exhibit />} />
        </Route>

        <Route path="culture">
          <Route index element={<Culture />} />
          <Route path=":id" element={<CultureArticle />} />
        </Route>

        <Route path="art-culture" element={<ArtCulturePage />} />

        <Route path="3d-exhibits" element={<ExhibitsPage />} />
        
        <Route path="one-exhibit" element={<OneExhibitPage />} />
      </Routes>
    </BrowserRouter>
  );
}
