import React from "react";
import "./Popup.css";

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="img/review1.jpg" alt="Tour photo" className="popup__img" />
          <img src="img/review2.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Read the terms before booking
          </h3>
          <p className="popup__text">
            By proceeding with your booking, you agree to abide by our terms and
            conditions, which include cancellation policies, check-in/check-out
            times, and any other guidelines relevant to your reservation. Please
            review these terms carefully before confirming your booking. We are
            committed to providing a safe and enjoyable experience for all our
            guests, and compliance with our terms is essential. Thank you for
            choosing our services, and we look forward to hosting you.
          </p>
          <a href="#section-book" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
