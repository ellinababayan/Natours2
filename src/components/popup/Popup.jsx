import React from "react";
import "./Popup.css";

const Popup = () => {
  return (
    <div class="popup" id="popup">
      <div class="popup__content">
        <div class="popup__left">
          <img src="img/review1.jpg" alt="Tour photo" class="popup__img" />
          <img src="img/review2.jpg" alt="Tour photo" class="popup__img" />
        </div>
        <div class="popup__right">
          <a href="#section-tours" class="popup__close">
            &times;
          </a>
          <h2 class="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 class="heading-tertiary u-margin-bottom-small">
            Important &ndash; Read the terms before booking
          </h3>
          <p class="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#section-book" class="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
