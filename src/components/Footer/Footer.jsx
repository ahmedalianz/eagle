import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import img1 from "../../Resources/img/gal3.jpg";
import img2 from "../../Resources/img/gal6.jpg";
import img3 from "../../Resources/img/gal5.jpg";
import img4 from "../../Resources/img/gal15.jpg";
import img5 from "../../Resources/img/gal16.jpg";
import img6 from "../../Resources/img/gal9.jpg";
import logoBig from "../../Resources/logoBig.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Fade>
          <div className="footer__posts">
            <h3 className="footer__posts__title">Eagle</h3>
            <img src={logoBig} alt="logo" />
          </div>
        </Fade>

        <div className="footer__useful-links">
          <Fade>
            <h3 className="footer__useful-links__title">Useful links</h3>
            <div className="footer__links">
              <ul>
                <li>
                  <Link to="/interior-design">Interior Design</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Fade>
        </div>

        <div className="footer__recent-works">
          <Fade>
            <h3 className="footer__recent-works__title">Recent Works</h3>
          </Fade>

          <div className="footer__grid-images">
            <Fade>
              <figure className="footer__item footer__item--1">
                <img src={img1} className="footer__img" alt="grid item 1" />
              </figure>
            </Fade>

            <Fade>
              <figure className="footer__item footer__item--2">
                <img src={img2} className="footer__img" alt="grid item 2" />
              </figure>
            </Fade>

            <Fade>
              <figure className="footer__item footer__item--3">
                <img src={img3} className="footer__img" alt="grid item 3" />
              </figure>
            </Fade>

            <Fade>
              <figure className="footer__item footer__item--4">
                <img src={img4} className="footer__img" alt="grid item 4" />
              </figure>
            </Fade>

            <Fade>
              <figure className="footer__item footer__item--5">
                <img src={img5} className="footer__img" alt="grid item 5" />
              </figure>
            </Fade>

            <Fade>
              <figure className="footer__item footer__item--6">
                <img src={img6} className="footer__img" alt="grid item 6" />
              </figure>
            </Fade>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
