
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import logo from '../assets/takaslalogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderWrapper = styled.header`
  background-color: #edffde;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 244px;
    height: 101px;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }

  .menu-toggle div {
    width: 30px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 2vh;
    font-family: "Poppins", monospace;
    cursor: pointer;
  }

  li:hover {
    opacity: 0.5;
  }

  li:nth-child(4) {
    background-color: #bcec7e;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }

    ul {
      display: ${(props) => (props.open ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 10vh;
      right: 0;
      background-color: #edffde;
      width: 100%;
      padding: 10px 0;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    li {
      font-size: 1.5rem;
      padding: 10px 0;
      text-align: center;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleImage = () => {
    {user ? navigate("/content") : navigate("/");}
  }

  return (
    <HeaderWrapper open={menuOpen}>
      <img src={logo} alt="Takasla Logo" onClick={handleImage}/>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li>Nasıl Çalışır</li>
        <li>Uygulamayı İndirin</li>
        <li>SSS</li>
        {user ? (
          <li onClick={handleProfile}>{user.name}</li>
        ) : (
          <li>
            <Link to="/login">Kayıt Ol / Giriş Yap</Link>
          </li>
        )}
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
