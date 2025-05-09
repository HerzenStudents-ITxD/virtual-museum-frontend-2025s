import { Link } from "react-router-dom";
import logo from "../../assets/img/svg/logo.svg"; 
import "./AdminHeader.css";

export default function AdminHeader() {
  return (
    <div className="desktop-header-admin">
      {/* Логотип и название */}
      <div className="logo-wrapper">
        <img src={logo} alt="logo" className="section-hero__header-logo" />
        <p className="section-hero__header-logo-description">
          МУЗЕЙ <br />ТРАДИЦИОННОЙ <br />КУЛЬТУРЫ
        </p>
      </div>

      {/* Кнопка "Просмотр сайта" */}
      <div className="special-button-wrapper">
        <Link to="/" className="special-header-button-admin">
          Просмотр сайта
        </Link>
        <div className="special-button-circle background-img"></div>
      </div>
    </div>
  );
}