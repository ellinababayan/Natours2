import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet="https://play-lh.googleusercontent.com/ncxH6mV7vMPgTpZvr0C9WOWRE83zOrcLdQPdvc0LYBJAmE3I9DIgKPpaGr3Cl_n50D1F=w240-h480-rw"
            //   media="(max-width: 7.5em)"
          />
          <img
            srcSet="https://play-lh.googleusercontent.com/ncxH6mV7vMPgTpZvr0C9WOWRE83zOrcLdQPdvc0LYBJAmE3I9DIgKPpaGr3Cl_n50D1F=w240-h480-rw"
            alt="Full logo"
            className="footer__logoimg"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#section-about" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
              
              {/* <li className="footer__item">
                <a href="" className="footer__link">
                  Privacy policy
                </a>
              </li> */}
              <li className="footer__item">
                <a href="#popup" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/ellina-babaian-302645267/"
              target="_blank"
              className="footer__link"
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
