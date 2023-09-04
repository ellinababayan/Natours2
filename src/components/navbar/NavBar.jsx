import React from "react";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav" id="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#section-about" class="navigation__link" onclick="hide()">
              <span>01</span>About Natours
            </a>
          </li>
          <li class="navigation__item">
            <a
              href="#section-features"
              class="navigation__link"
              onclick="hide()"
            >
              <span>02</span>Your benefits
            </a>
          </li>
          <li class="navigation__item">
            <a href="#section-tours" class="navigation__link" onclick="hide()">
              <span>03</span>Popular tours
            </a>
          </li>
          <li class="navigation__item">
            <a
              href="#section-stories"
              class="navigation__link"
              onclick="hide()"
            >
              <span>04</span>Stories
            </a>
          </li>
          <li class="navigation__item">
            <a href="#section-book" class="navigation__link" onclick="hide()">
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
