import React from "react";
import { FormattedMessage } from "react-intl";

const Stack = () => {
  return (
    <div className="stack">
      <div className="container">
          <div className="textInStack">
              <span><FormattedMessage id="header.message.stack.skills" /></span>
              <h2><FormattedMessage id="header.message.stack.stack" /></h2>
              <hr></hr>
          </div>
          <div className="technologyStack">
            <div className="leftStack">
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
                <div className="skill">SCSS</div>
                <div className="skill">BABEL</div>
            </div>
            <div className="midStack">
            <div className="skill">JAVASCRIPT</div>
                <div className="skill">REACT</div>
                <div className="skill">Node.js</div>
                <div className="skill">NPM</div>
            </div>
            <div className="rightStack">
            <div className="skill">GULP</div>
                <div className="skill">GIT</div>
                <div className="skill">WEBPACK</div>
                <div className="skill">PHP</div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Stack;
