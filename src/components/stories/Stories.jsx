import React from "react";
import "./Stories.css";

const Stories = () => {
  return (
    <section className="section-stories" id="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="img/ocean.mp4" type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Video is not supported by browser
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src="img/review3.jpg" alt="Person" className="story__img" />
            <figcaption className="story__caption">Ted Todler</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week with my family
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              voluptatum ipsum dolor, sit amet consectetur adipisicing elit. Aut
              voluptatum maiores, illum vel non minus. Fugit, quidem! Soluta
              adipisci suscipit aspernatur hic, velit, minima corrupti vero
              tenetur dolore, facilis accusantium?
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src="img/review2.jpg" alt="Person" className="story__img" />
            <figcaption className="story__caption">John Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Wow! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              voluptatum ipsum dolor, sit amet consectetur adipisicing elit. Aut
              voluptatum maiores, illum vel non minus. Fugit, quidem! Soluta
              adipisci suscipit aspernatur hic, velit, minima corrupti vero
              tenetur dolore, facilis accusantium?
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-small">
        <a href="#" className="btn-text">
          Read more stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
