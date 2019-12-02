import React from 'react';
import logo from '../../../public/assets/logo.png';
import './style.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Facebook" />
      </div>
      <div className="profile">
        <a href="/profile">Meu Perfil</a>
      </div>
    </header>
  );
}

export default Header;