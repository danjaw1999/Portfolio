import React from "react";
import { FormattedMessage } from "react-intl";
import { BrowserRouter as Router, Link } from "react-router-dom";
import video from "./assets/video.mp4";
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
      <video loop muted autoPlay playsInline>
        <source src={video} type="video/mp4" />
      </video>
      <div className="darkVideo"></div>
      <header className="header">
        <div className="container">
          <div className="upperSiteHeader">
            <div className="magPag">
              <div className="left-site">
                <span>Jaworski</span>
                <span style={{ color: props.color }}>Daniel</span>
              </div>
              <div className="nav-bar">
                <Router>
                  <ul>
                    <li>
                      <Link style={{ color: props.color }}>
                        <FormattedMessage id="header.message.menu.home" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FormattedMessage id="header.message.menu.about" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FormattedMessage id="header.message.menu.services" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FormattedMessage id="header.message.menu.resume" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FormattedMessage id="header.message.menu.portfolio" />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FormattedMessage id="header.message.menu.contact" />
                      </Link>
                    </li>
                  </ul>
                </Router>
              </div>
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
            <img src={face} alt="picture face"></img>
            <span style={{ color: props.color }}>Jaworski Daniel</span>
            <p>Javascript-React Developer 💻</p>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
