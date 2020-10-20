import React from "react";
import { FormattedMessage } from "react-intl";
import video from "./assets/video.mp4";
import { Link as ScrollLink } from "react-scroll";
import face from "./assets/face.jpg";
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

const Header = (props) => {
  return (
    <>
      <video loop muted autoPlay playsInline className="video">
        <source src={video} type="video/mp4" />
      </video>
      <header className="header">
        <div className="container" name="home">
          <div className="upperSiteHeader">
            <div className="magPag">
              <div className="left-site">
                <span>Jaworski</span>
                <span style={{ color: props.color }}>Daniel</span>
              </div>
              <section className="nav-bar">
                <ul>
                  <li>
                    <ScrollLink to="home" spy={true}
                      smooth={true} style={{ color: props.color }} >
                      <FormattedMessage id="header.message.menu.home" />
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink spy={true}
                      smooth={true} to="about">
                      <FormattedMessage id="header.message.menu.about" />
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink spy={true}
                      smooth={true} to="stack">
                      <FormattedMessage id="header.message.menu.services" />
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink spy={true}
                      smooth={true} to="resume">
                      <FormattedMessage id="header.message.menu.resume" />
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink spy={true}
                      smooth={true} to="portfolio">
                      <FormattedMessage id="header.message.menu.portfolio" />
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink spy={true}
                      smooth={true} to="contact">
                      <FormattedMessage id="header.message.menu.contact" />
                    </ScrollLink>
                  </li>
                </ul>

              </section>
              <div className="burger" onClick={handleClickBurger}>
                <div
                  className="line1"
                  style={{ backgroundColor: props.color }}
                ></div>
                <div
                  className="line2"
                  style={{ backgroundColor: props.color }}
                ></div>
                <div
                  className="line3"
                  style={{ backgroundColor: props.color }}
                ></div>
              </div>
            </div>
          </div>
          <div className="nameandphoto">
            <img src={face} alt="face"></img>
            <span style={{ color: props.color }}>Jaworski Daniel</span>
            <p>Javascript-React Developer 💻</p>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
