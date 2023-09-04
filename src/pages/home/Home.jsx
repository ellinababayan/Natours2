import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/NavBar";
import About from "../../components/about/About";
import Features from "../../components/features/Features";
import Tours from "../../components/tours/Tours";
import Stories from "../../components/stories/Stories";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <Header />

      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        {/* <section class="section-stories" id="section-stories">
          <div class="bg-video">
            <video class="bg-video__content" autoplay muted loop>
              <source src="img/ocean.mp4" type="video/mp4" />
              <source src="img/video.webm" type="video/webm" />
              Video is not supported by browser
            </video>
          </div>

          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">We make people genuinely happy</h2>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src="img/review3.jpg" alt="Person" class="story__img" />
                <figcaption class="story__caption">Ted Todler</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  I had the best week with my family
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  voluptatum ipsum dolor, sit amet consectetur adipisicing elit.
                  Aut voluptatum maiores, illum vel non minus. Fugit, quidem!
                  Soluta adipisci suscipit aspernatur hic, velit, minima
                  corrupti vero tenetur dolore, facilis accusantium?
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="story">
              <figure class="story__shape">
                <img src="img/review2.jpg" alt="Person" class="story__img" />
                <figcaption class="story__caption">John Smith</figcaption>
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  Wow! My life is completely different now
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  voluptatum ipsum dolor, sit amet consectetur adipisicing elit.
                  Aut voluptatum maiores, illum vel non minus. Fugit, quidem!
                  Soluta adipisci suscipit aspernatur hic, velit, minima
                  corrupti vero tenetur dolore, facilis accusantium?
                </p>
              </div>
            </div>
          </div>

          <div class="u-center-text u-margin-top-small">
            <a href="#" class="btn-text">
              Read more stories &rarr;
            </a>
          </div>
        </section> */}

        <section class="section-book" id="section-book">
          <div class="row">
            <div class="book">
              <div class="book__form">
                <form action="#" class="form">
                  <div class="u-margin-bottom-medium">
                    <h2 class="heading-secondary">Start booking now</h2>
                  </div>

                  <div class="form__group">
                    <input
                      type="text"
                      class="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                    />
                    <label for="name" class="form__label">
                      Full Name
                    </label>
                  </div>

                  <div class="form__group">
                    <input
                      type="email"
                      class="form__input"
                      placeholder="Email Address"
                      id="email"
                      required
                    />
                    <label for="email" class="form__label">
                      Email Address
                    </label>
                  </div>

                  <div class="form__group u-margin-bottom-medium">
                    <div class="form__radio-group">
                      <input
                        type="radio"
                        class="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label for="small" class="form__radio-label">
                        <span class="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>

                    <div class="form__radio-group">
                      <input
                        type="radio"
                        class="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label for="large" class="form__radio-label">
                        <span class="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>

                  <div class="form__group">
                    <button class="btn btn--green"> Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer__logo-box">
          <picture class="footer__logo">
            <source
              srcset="https://play-lh.googleusercontent.com/ncxH6mV7vMPgTpZvr0C9WOWRE83zOrcLdQPdvc0LYBJAmE3I9DIgKPpaGr3Cl_n50D1F=w240-h480-rw"
              //   media="(max-width: 7.5em)"
            />
            <img
              srcset="https://play-lh.googleusercontent.com/ncxH6mV7vMPgTpZvr0C9WOWRE83zOrcLdQPdvc0LYBJAmE3I9DIgKPpaGr3Cl_n50D1F=w240-h480-rw"
              alt="Full logo"
              className="footer__logoimg"
            />
          </picture>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Company
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Contact
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Carrers
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              Built by{" "}
              <a
                href="https://www.linkedin.com/in/ellina-babaian-302645267/"
                target="_blank"
                class="footer__link"
              >
                Ellina Babaian
              </a>{" "}
              Copyright &copy; by Ellina Babaian
            </p>
          </div>
        </div>
      </footer>

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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#section-book" class="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
