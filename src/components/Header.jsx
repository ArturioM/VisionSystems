import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <div className="header__vision">VisionSystem</div>
        </Link>
        <div className="header-container">
          <div className="header-container__outsourcing">OUTSOURCING</div>
          <div className="header-container__projects">OWN PROJECTS</div>
          <div className="header-container__mail">HELLO@VISIONSYSTEMS.TECH</div>
        </div>
        <div className="header__number">+7 (909) 437 01 23</div>
        <div className="header__language">
          <div className="header__language-en">EN</div>
          <div className="header__language-ru">RU</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
