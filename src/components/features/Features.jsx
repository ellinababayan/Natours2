import React from "react";
import "./Features.css";
import "./icon-font.css";

const Features = () => {
  return (
    <section className="section-features" id="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Embark on a journey to discover the beauty of diverse cultures and
              breathtaking landscapes.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet Nature
            </h3>
            <p className="feature-box__text">
              Connect with the serenity of nature, as you encounter lush
              forests, mountains, and lakes.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p className="feature-box__text">
              Navigate the twists and turns of life's path, and uncover your
              true purpose and direction.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live a helthier life
            </h3>
            <p className="feature-box__text">
              Prioritize your well-being by making choices in nutrition, paving
              the way to a happier life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
