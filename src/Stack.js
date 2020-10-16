import React from "react";
import { FormattedMessage } from "react-intl";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import git from "./assets/git.png";
import js from "./assets/js.png";
import node from "./assets/node.svg";
import react from "./assets/react.png";
import npm from "./assets/npm.png";
import gulp from "./assets/gulp.png";
import mongo from "./assets/mongo.png";
import php from "./assets/php.jpg";
import babel from "./assets/babel.png";
import webpack from "./assets/webpack.jpg";

const Stack = (props) => {
  return (
    <div className="stack">
      <div className="container">
        <div className="textInStack">
          <span className="mainTitle" style={{ color: props.color }}>
            <FormattedMessage id="header.message.stack.skills" />
          </span>
          <h2 className="secondaryTitle">
            <FormattedMessage id="header.message.stack.stack" />
          </h2>
          <hr style={{ borderColor: props.color }}></hr>
        </div>
        <div className="technologyStack">
          <div className="leftStack">
            <div className="skill">
              <img src={html} />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={css} />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src={mongo} />
              <p>MONGO</p>
            </div>
            <div className="skill">
              <img src={babel} />
              <p>BABEL</p>
            </div>
          </div>
          <div className="midStack">
            <div className="skill">
              <img src={js} />
              <p>JAVASCRIPT</p>
            </div>
            <div className="skill">
              <img src={react} />
              <p>REACT</p>
            </div>
            <div className="skill">
              <img src={node} />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src={npm} />
              <p>NPM</p>
            </div>
          </div>
          <div className="rightStack">
            <div className="skill">
              <img src={gulp} />
              <p>GULP</p>
            </div>
            <div className="skill">
              <img src={git} />
              <p>GIT</p>
            </div>
            <div className="skill">
              <img src={webpack} />
              <p>WEBPACK</p>
            </div>
            <div className="skill">
              <img src={php} />
              <p>PHP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stack;
