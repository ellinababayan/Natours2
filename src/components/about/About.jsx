import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section-about" id="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You`re going to fall in love with nature
          </h3>
          <p className="paragraph">
            Prepare to be captivated by the wonders of nature as you immerse
            yourself in its beauty and tranquility. Immerse yourself in the
            wonders of the natural world, and let its beauty and tranquility
            captivate your soul like never before.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Embrace thrilling experiences that will push your boundaries and
            open doors to new and unforgettable adventures. Embark on a journey
            filled with thrilling experiences that will redefine your sense of
            adventure, pushing boundaries and opening doors to a world of new
            and unforgettable possibilities.
          </p>
          <a href="#" className="btn-text">
            Learn More &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="img/forest.jpg"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="img/mountain.jpg"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="img/waterfall.jpg"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
