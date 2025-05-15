import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import "./Login.css";
import EyeOpen from "../../assets/icons/eye-open.svg";
import EyeClose from "../../assets/icons/eye-close.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="admin-login-page">
      <AdminHeader />
      
      <div className="login-container">
        <h1 className="login-title">Войдите в аккаунт</h1>
        
        <div className="input-field">
          <input 
            type="text" 
            placeholder="Логин" 
            className="login-input" 
          />
        </div>
        
        {/* Поле для пароля */}
        <div className="input-field">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Пароль" 
            className="login-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && (
            <img 
              src={showPassword ? EyeOpen : EyeClose} 
              alt="Toggle password visibility" 
              className="eye-icon"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        
        <button className="login-button">Войти</button>
      </div>
    </div>
  );
};

export default Login;