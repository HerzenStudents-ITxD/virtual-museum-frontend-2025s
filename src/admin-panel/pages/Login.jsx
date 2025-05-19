import api from "../../Api";
import { useState } from "react";
import { useNavigate } from "react-router";
import AdminHeader from "../components/AdminHeader";
import "./Login.css";
import EyeOpen from "../../assets/icons/eye-open.svg";
import EyeClose from "../../assets/icons/eye-close.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleAuthenticate() {
    try {
      const response = await api.authenticate(username, password);
      localStorage.setItem("accessToken", response.access_token);
      navigate("/content");
    } catch (error) {
      // TODO: дать фидбэк пользователю.
      console.log(`Error authenticating:\n${error}`);
    }
  }

  function togglePasswordVisibility() {
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
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        
        {/* Поле для пароля */}
        <div className="input-field">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Пароль" 
            className="login-input" 
            value={password}
            onChange={event => setPassword(event.target.value)}
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
        
        <button
          className="login-button"
          onClick={handleAuthenticate}
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default Login;