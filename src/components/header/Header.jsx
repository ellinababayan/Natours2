import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header class="header">
      <div class="header__logo-box">
        <img src="img/logo.gif" alt="Logo" class="header__logo" />
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Outdoors</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#section-tours" class="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
