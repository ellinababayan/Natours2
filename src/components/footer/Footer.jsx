import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
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
  );
};

export default Footer;
