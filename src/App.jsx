import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ExhibitsPage from "./pages/ExhibitsPage";
import OneExhibitPage from "./pages/OneExhibitPage";
import Culture from "./Culture";
import CultureArticle from "./CultureArticle";
import ArtCulturePage from "./pages/ArtCulturePage";
import ArtArticlePage from "./pages/ArtArticlePage";
import Login from "./admin-panel/pages/Login";
import ContentManagerPage from "./admin-panel/pages/ContentManagerPage";
import NewModelPage from "./admin-panel/pages/NewModelPage";
import NewArticlePage from "./admin-panel/pages/NewArticlePage";
import NoFoundPage from "./pages/NoFoundPage"

export default function App() {
  return (
    <BrowserRouter basename="/virtual_museum">
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="exhibits"> "/exhibits"
          <Route index element={<ExhibitsPage />} />
          <Route path=":id" element={<OneExhibitPage />} />
        </Route>

        <Route path="culture">
          <Route index element={<ArtCulturePage />} />
          <Route path=":id" element={<ArtArticlePage />} /> 
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="content" element={<ContentManagerPage />} />
        <Route path="modelcreate" element={<NewModelPage />} />
        <Route path="articlecreate" element={<NewArticlePage />} />
        <Route path="404" element={<NoFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}