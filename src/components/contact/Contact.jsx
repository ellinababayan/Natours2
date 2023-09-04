import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="popup" id="contact">
      <div className="popup__content">
        <div className="popup__right">
          <a href="#footer" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">Contact</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Hi there! <br></br>Looking forward to hear from you back
          </h3>
          <div className="popup__contact">
            <a
              href="https://www.linkedin.com/in/ellina-babaian-302645267/"
              target="_blank"
              className="link_tag"
            >
              <img
                className="link_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              ></img>
            </a>
            <a
              href="https://github.com/ellinababayan"
              target="_blank"
              className="link_tag"
            >
              <img
                className="link_logo"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              ></img>
            </a>
            <a
              href="mailto:famogl375@gmail.com"
              target="_blank"
              className="link_tag"
            >
              <img
                className="link_logo"
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
              ></img>
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/ellina-babaian-302645267/"
            target="_blank"
            className="btn btn--green"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
