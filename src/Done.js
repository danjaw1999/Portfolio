import React from "react";
import { FormattedMessage } from "react-intl";

const Done = () => {
  return (
    <div className="done">
      <div className="container">
        <div className="textInDone">
          <span>
            <FormattedMessage id="done.works" />
          </span>
          <h2>
            <FormattedMessage id="done.portf" />
          </h2>
          <hr />
        </div>
        <div className="doneProjects">
          <div className="box">
            <div className="themeBox"></div>
          </div>
          <div className="box">
            <div className="themeBox"></div>
          </div>
          <div className="box">
            <div className="themeBox"></div>
          </div>
          <div className="box">
            <div className="themeBox"></div>
          </div>
          <div className="box">
            <div className="themeBox"></div>
          </div>
          <div className="box">
            <div className="themeBox"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done;
