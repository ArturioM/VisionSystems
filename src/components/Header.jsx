import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        {/* <Link to="/"> */}
        <div className="header__vision">VisionSystem</div>
        {/* </Link> */}
        <div className="header__container">
          <div className="header-container__out">OUTSOURCING</div>
          <div className="header-container__own">OWN PROJECTS</div>
          <div className="header-container__mail">HELLO@VISIONSYSTEMS.TECH</div>
        </div>
        <div className="header__number">+7 (909) 437 01 23</div>
        <div className="header__language">
          <div className="header-language__en">EN</div>
          <div className="header-language__ru">RU</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
