import React from "react";
import { FormattedMessage } from "react-intl";
import video from "./assets/video.mp4";
function handleClickBurger(e) {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar ul li");

  e.preventDefault();
  nav.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
  burger.classList.toggle("toggle");
}

const Header = () => {
  return (
    <>
      <video loop muted autoPlay>
        <source src={video} type="video/mp4" />
      </video>
      <div className="darkVideo"></div>
      <header className="header">
        <div className="container">
          <div className="upperSiteHeader">
            <div className="magPag">
              <div className="left-site"><span>
              Jaworski</span> Daniel</div>
              <div className="nav-bar">
                <ul>
                  <li>
                    <a href="#">
                      <FormattedMessage id="header.message.menu.home" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id="header.message.menu.about" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id="header.message.menu.services" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id="header.message.menu.resume" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id="header.message.menu.portfolio" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id="header.message.menu.contact" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="burger" onClick={handleClickBurger}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
          </div>
          <div className="nameandphoto">
            {/* <img>Tu moje zdjęcie</img> */}
            <span>Jaworski Daniel</span>
            <p>Javascript-React Developer 💻</p>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
