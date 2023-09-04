import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const hide = () => {
    console.log("here");
    document.getElementsByClassName("navigation__checkbox")[0].checked = false;
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav" id="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#section-about"
              className="navigation__link"
              onClick={hide}
            >
              <span>01</span>About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-features"
              className="navigation__link"
              onClick={hide}
            >
              <span>02</span>Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-tours"
              className="navigation__link"
              onClick={hide}
            >
              <span>03</span>Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-stories"
              className="navigation__link"
              onClick={hide}
            >
              <span>04</span>Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-book" className="navigation__link" onClick={hide}>
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
