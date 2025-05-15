import { Link } from "react-router-dom";
import logo from "../assets/img/svg/logo.svg";
import errorImage from "../assets/img/404.png";
import "./NoFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <header className="not-found-header">
        <Link to="/" className="logo-wrapper">
          <img src={logo} alt="logo" className="not-found-logo-image" />
          <p className="not-found-logo-text">
            МУЗЕЙ <br />ТРАДИЦИОННОЙ <br />КУЛЬТУРЫ
          </p>
        </Link>
      </header>

      <div className="not-found-content">
        <div className="not-found-image-container">
          <img src={errorImage} alt="404" className="not-found-image" />
          <h1 className="not-found-text">Страница не найдена</h1>
          <Link to="/" className="not-found-button">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}