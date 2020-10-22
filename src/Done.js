import React from "react";
import { FormattedMessage } from "react-intl";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";

const Done = (props) => {
  return (
    <div className="done" name="portfolio">
      <div className="container">
        <div className="textInDone">
          <p className="mainTitle" style={{ color: props.color }}>
            <FormattedMessage id="done.works" />
          </p>
          <hr style={{ borderColor: props.color }} />
        </div>
        <div className="doneProjects">
          <div className="hideDiv"></div>
          <div className="box">
            <img src={p3} alt="Oddaj Rzeczy" />

            <div className="themeBox">
              <p style={{ color: props.color }}>
                <FormattedMessage id="done.p3.text" />
              </p>
              <button style={{ backgroundColor: props.color }}>
                <a
                  href="https://github.com/danjaw1999/Oddaj-Rzeczy"
                  target="_blank" rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </button>
              <button disabled="disabled" className="disabled">
                <a>LIVE</a>
              </button>
              <h3>
                <FormattedMessage id="done.tech" />
              </h3>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React-Router</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <img src={p1} alt="GitHub Profiles" />
            <div className="themeBox">
              <p style={{ color: props.color }}>
                <FormattedMessage id="done.p2.text" />
              </p>
              <button style={{ backgroundColor: props.color }}>
                <a
                  href="https://github.com/danjaw1999/githubProfiles"
                  target="_blank" rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </button>
              <button style={{ backgroundColor: props.color }}>
                <a
                  href="https://danjaw1999.github.io/githubProfiles/index.html"
                  target="_blank" rel="noopener noreferrer"
                >
                  LIVE
                </a>
              </button>
              <h3>
                <FormattedMessage id="done.tech" />
              </h3>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <img src={p5} alt="Zaplanuj Jedzonko" />
            <div className="themeBox">
              <p style={{ color: props.color }}>
                <FormattedMessage id="done.p5.text" />
              </p>
              <button style={{ backgroundColor: props.color }}>
                <a
                  href="https://github.com/danjaw1999/ZaplanujJedzonko"
                  target="_blank" rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </button>
              <button style={{ backgroundColor: props.color }}>
                <a href="https://danjaw1999.github.io/ZaplanujJedzonko/development/index.html" rel="noopener noreferrer">
                  LIVE
                </a>
              </button>
              <h3>
                <FormattedMessage id="done.tech" />
              </h3>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>LocaleStorage</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <img src={p2} alt="PacMan" />
            <div className="themeBox">
              <p style={{ color: props.color }}>
                <FormattedMessage id="done.p1.text" />
              </p>
              <button style={{ backgroundColor: props.color }}>
                <a href="https://github.com/danjaw1999/PacMan" rel="noopener noreferrer" target="_blank">
                  GITHUB
                </a>
              </button>
              <button disabled="disabled" className="disabled">
                <a>LIVE</a>
              </button>
              <h3>
                <FormattedMessage id="done.tech" />
              </h3>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <img src={p4} alt="ShopByJawor" />
            <div className="themeBox">
              <p style={{ color: props.color }}>
                <FormattedMessage id="done.p4.text" />
              </p>
              <button style={{ backgroundColor: props.color }}>
                <a
                  href="https://github.com/danjaw1999/ShopByJawor"
                  target="_blank" rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </button>
              <button disabled="disabled" className="disabled">
                <a>LIVE</a>
              </button>
              <h3>
                <FormattedMessage id="done.tech" />
              </h3>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>JSON-Server</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <img src={p6} alt="Portfolio" className="portfolio" />
            <div className="themeBox">
              <p style={{ color: props.color }}>
                <FormattedMessage id="done.p6.text" />
              </p>
              <button style={{ backgroundColor: props.color }}>
                <a
                  href="https://github.com/danjaw1999/Portfolio"
                  target="_blank" rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </button>
              <button style={{ backgroundColor: props.color }}>
                <a href="https://jaworskidaniel.pl"
                  target="_blank" rel="noopener noreferrer">LIVE</a>
              </button>
              <h3>
                <FormattedMessage id="done.tech" />
              </h3>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Router</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done;
