import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({loggedIn, userEmail, onSignOut}) {
  const {pathname: path} = useLocation();

  let linkText;
  const link = (path === '/sign-up') ? 'sign-in' : 'sign-up';

  if (path === '/sign-up') linkText = 'Войти';
  if (path === '/') linkText = 'Выйти';
  if (path === '/sign-in') linkText = 'Регистрация';

  return(
    <header className="header section section_place_header">
      <Link to="/" className="header__logo" title="На главную"/>
      <div className="header__links">
        {loggedIn && (<span className="header__label">{userEmail}</span>)}
        <Link to={link} onClick={onSignOut} className="header__link" >{linkText}</Link>
      </div>
    </header>
  )
}

export  default  Header;
