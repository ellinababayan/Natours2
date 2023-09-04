import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/NavBar";
import About from "../../components/about/About";
import Features from "../../components/features/Features";
import Tours from "../../components/tours/Tours";
import Stories from "../../components/stories/Stories";
import Book from "../../components/book/Book";

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
        <Book />
       
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
