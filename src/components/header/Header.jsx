import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="header">
      <div className="header__logo-box">
        <img
          src="https://play-lh.googleusercontent.com/ncxH6mV7vMPgTpZvr0C9WOWRE83zOrcLdQPdvc0LYBJAmE3I9DIgKPpaGr3Cl_n50D1F=w240-h480-rw"
          alt="Logo"
          className="header__logo"
        />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("section-tours");
          }}
          className="btn btn--white btn--animated"
        >
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
