import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Exhibits from "./Exhibits";
import Exhibit from "./Exhibit";
import Culture from "./Culture";
import CultureArticle from "./CultureArticle";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="exhibits">
          <Route index element={<Exhibits />}/>
          <Route path=":id" element={<Exhibit />}/>
        </Route>

        <Route path="culture">
          <Route index element={<Culture />} />
          <Route path=":id" element={<CultureArticle />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
