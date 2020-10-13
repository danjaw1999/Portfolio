import React from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="photoInAbout">Tu moje zdjęcie będzie</div>
        <div className="discover">
          <span>
            {" "}
            <FormattedMessage id="header.message.about.discover" />
          </span>
          <h2>
            {" "}
            <FormattedMessage id="header.message.about.aboutMe" />
          </h2>
          <hr></hr>
          <span>
            {" "}
            <FormattedMessage id="header.message.about.longtext" />
          </span>
          <div className="tableInAbout">
            <div className="leftSiteInTable">
              <div className="tableInputs">
                <span>
                  {" "}
                  <FormattedMessage id="header.message.table.name" />
                </span>
                <span>Jaworski Daniel</span>
              </div>
              <div className="tableInputs">
                {" "}
                <span>
                  {" "}
                  <FormattedMessage id="header.message.table.phone" />
                </span>
                <span>+48 788684524</span>
              </div>
              <div className="tableInputs">
                {" "}
                <span>
                  {" "}
                  <FormattedMessage id="header.message.table.experience" />
                </span>
                <span>
                  {" "}
                  <FormattedMessage id="header.message.table.aexperience" />{" "}
                </span>
              </div>
              <div className="tableInputs">
                <span>Github:</span>
                <span>
                  <a href="https://github.com/danjaw1999/">danjaw1999</a>
                </span>
              </div>
            </div>
            <div className="rightSiteInTable">
              <div className="tableInputs">
                {" "}
                <span>
                  {" "}
                  <FormattedMessage id="header.message.table.age" />
                </span>
                <span>21</span>
              </div>
              <div className="tableInputs">
                {" "}
                <span>
                  {" "}
                  <FormattedMessage id="header.message.table.address" />
                </span>
                <span>
                  <FormattedMessage id="header.message.table.aaddress" />
                </span>
              </div>
              <div className="tableInputs">
                {" "}
                <span>
                  {" "}
                  <FormattedMessage id="header.message.table.freelance" />
                </span>
                <span>
                  {" "}
                  <FormattedMessage id="header.message.table.afreelance" />{" "}
                </span>
              </div>
              <div className="tableInputs">
                <span>LinkedIn :</span>
                <span>
                  <a href="https://www.linkedin.com/in/daniel-jaworski1999/">
                    danjaw1999
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="buttonUnderTable">
            <button>
              {" "}
              <FormattedMessage id="header.message.table.button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
