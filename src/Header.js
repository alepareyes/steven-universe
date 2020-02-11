import React from 'react';
import './styles/header.scss';


function Header() {
  return (
    <header class="header">
      <img class="header__logo" src="https://i.pinimg.com/originals/93/89/26/938926c5eb87d829d5d1a2cae5cd1991.gif" />
      <label class="header__label">Who are you looking for?</label>
      <input class="header__input" type="text"></input>
    </header>
  )
}

export default Header;