import React from "react";
import "./Features.css";
import "./icon-font.css"

const Features = () => {
  return (
    <section class="section-features" id="section-features">
      <div class="row">
        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-world"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p class="feature-box__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              voluptatum
            </p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-compass"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
            <p class="feature-box__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              voluptatum
            </p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-map"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p class="feature-box__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              voluptatum
            </p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-heart"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Live a helthier life
            </h3>
            <p class="feature-box__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              voluptatum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
