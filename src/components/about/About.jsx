import React from "react";
import "./About.css"

const About = () => {
  return (
    <section class="section-about" id="section-about">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Exciting tours for adventurous people</h2>
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <h3 class="heading-tertiary u-margin-bottom-small">
            You`re going to fall in love with nature
          </h3>
          <p class="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            voluptatum maiores, illum vel non minus. Fugit, quidem! Soluta
            adipisci suscipit aspernatur hic, velit, minima corrupti vero
            tenetur dolore, facilis accusantium?
          </p>

          <h3 class="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p class="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            voluptatum maiores, illum vel non minus. Fugit, quidem! Soluta
            adipisci suscipit aspernatur hic, velit, minima corrupti vero
            tenetur dolore, facilis accusantium?
          </p>
          <a href="#" class="btn-text">
            Learn More &rarr;
          </a>
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            <img
              src="img/forest.jpg"
              alt="Photo 1"
              class="composition__photo composition__photo--p1"
            />
            <img
              src="img/mountain.jpg"
              alt="Photo 2"
              class="composition__photo composition__photo--p2"
            />
            <img
              src="img/waterfall.jpg"
              alt="Photo 3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
