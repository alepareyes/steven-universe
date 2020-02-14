import React from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Link to="/">
      <header className="header">
        <img className="header__logo" src="https://i.pinimg.com/originals/93/89/26/938926c5eb87d829d5d1a2cae5cd1991.gif" />
      </header>
    </Link>
  )
}

export default Header;