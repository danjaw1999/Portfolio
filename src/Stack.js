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
import webpack from "./assets/webpack.png";

const Stack = (props) => {
  return (
    <div className="stack" name="stack">
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
              <img alt="html" src={html} />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img alt="css" src={css} />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img alt="mongo" src={mongo} />
              <p>MONGO</p>
            </div>
            <div className="skill">
              <img alt="babel" src={babel} />
              <p>BABEL</p>
            </div>
          </div>
          <div className="midStack">
            <div className="skill">
              <img alt="javascript" src={js} style={{ width: 120 }} />
              <p>JAVASCRIPT</p>
            </div>
            <div className="skill">
              <img alt="react" src={react} />
              <p>REACT</p>
            </div>
            <div className="skill">
              <img alt="node" src={node} />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img alt="npm" src={npm} style={{ width: 200 }} />
              <p>NPM</p>
            </div>
          </div>
          <div className="rightStack">
            <div className="skill">
              <img alt="gulp" src={gulp} style={{ width: 80 }} />
              <p>GULP</p>
            </div>
            <div className="skill">
              <img alt="git" src={git} />
              <p>GIT</p>
            </div>
            <div className="skill">
              <img alt="webpack" src={webpack} style={{ width: 100 }} />
              <p>WEBPACK</p>
            </div>
            <div className="skill">
              <img alt="php" src={php} />
              <p>PHP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stack;
