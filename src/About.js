import React from "react";
import { FormattedMessage } from "react-intl";
import face from "./assets/face.jpg";
import github from "./assets/github2.png";
import linkedin from "./assets/linkedin.png";
const About = (props) => {
  return (
    <div className="About">
      <div className="container">
        <div className="photoInAbout">
          <img src={face} alt="picture" />
        </div>
        <div className="discover">
          <span style={{ color: props.color }} className="mainTitle">
            {" "}
            <FormattedMessage id="header.message.about.discover" />
          </span>
          <h2 className="secondaryTitle">
            {" "}
            <FormattedMessage id="header.message.about.aboutMe" />
          </h2>
          <hr style={{ borderColor: props.color }}></hr>
          <p className="aboutMe">
            {" "}
            <FormattedMessage id="header.message.about.longtext" />
          </p>
          <div
            className="tableInAbout"
            style={{
              borderWidth: "0.01rem",
              borderColor: props.color,
              borderStyle: "solid"
            }}
          >
            <div className="leftSiteInTable">
              <div className="tableInputs">
                <div className="block">
                  <p>
                    <FormattedMessage id="header.message.table.name" />
                  </p>
                  <p>Jaworski Daniel</p>
                </div>
              </div>
              <div className="tableInputs">
                <div className="block">
                  <p>
                    <FormattedMessage id="header.message.table.phone" />
                  </p>
                  <p>+48 788684524</p>
                </div>
              </div>
              <div className="tableInputs">
                <div className="block">
                  <p>
                    {" "}
                    <FormattedMessage id="header.message.table.experience" />
                  </p>
                  <p>
                    {" "}
                    <FormattedMessage id="header.message.table.aexperience" />{" "}
                  </p>
                </div>
              </div>
              <div className="tableInputs">
                <div className="block">
                  <p>Github: </p>
                  <p>
                    <a href="https://github.com/danjaw1999/">
                      <img src={github} height="25" style={{ marginTop: -5 }} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rightSiteInTable">
              <div className="tableInputs">
                <div className="block">
                  <p>
                    {" "}
                    <FormattedMessage id="header.message.table.age" />
                  </p>
                  <p>21</p>
                </div>
              </div>
              <div className="tableInputs">
                <div className="block">
                  <p>
                    <FormattedMessage id="header.message.table.address" />
                  </p>
                  <p>
                    <FormattedMessage id="header.message.table.aaddress" />
                  </p>
                </div>
              </div>
              <div className="tableInputs">
                <div className="block">
                  <p>
                    <FormattedMessage id="header.message.table.freelance" />
                  </p>
                  <p>
                    <FormattedMessage id="header.message.table.afreelance" />
                  </p>
                </div>
              </div>
              <div className="tableInputs">
                <div className="block">
                  <p>LinkedIn: </p>
                  <p>
                    <a href="https://www.linkedin.com/in/daniel-jaworski1999/">
                      <img
                        src={linkedin}
                        height="25"
                        style={{ marginTop: -5 }}
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="buttonUnderTable">
            <button
              style={{ backgroundColor: props.color, borderColor: props.color }}
            >
              <a
                href="https://drive.google.com/drive/folders/1yiJBW9NpYtMghYDq3qRuUemei-mnyXH5?usp=sharing"
                target="_blank"
              >
                <FormattedMessage id="header.message.table.button" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
