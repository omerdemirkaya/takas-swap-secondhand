import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/LoginSlice";
import "../components/CSS/LoginPage.css";
import Header from "./Header";

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { name, email };
    dispatch(setUser(user));
    if (name !== "" && email !== "" && password !== "") {
      navigate('/content'); // Yönlendirme yapıldığında doğru yolu kullanın
    }
  };

  return (
    <>
    <Header />
    <div className="login-container">
      <div className="login-panel">
        <div className="login-panel-header">Kayıt Ol</div>
        <div className="login-panel-content">
          <form onSubmit={handleLogin}>
            {isRegistering && (
              <input
                type="text"
                placeholder="İsim Soyisim"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
              {isRegistering ? "Kayıt Ol" : "Giriş Yap"}
            </button>
          </form>
          <p className="warning-message" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Hesabınız var mı?" : "Kayıt Ol"}
          </p>
          <button className="google-button">
            <i className="fa-brands fa-google" style={{ color: '#ff0000' }}></i> Google ile bağlan
          </button>
        </div>
      </div>
    </div>
    </> );
};

export default LoginPage;
