import React from "react";
import { FormattedMessage } from "react-intl";

const Experience = (props) => {
  return (
    <section className="experience" name="resume">
      <div className="container">
        <div className="textInExperience">
          <p className="mainTitle" style={{ color: props.color }}>
            <FormattedMessage id="header.message.exp.exp" />
          </p>
          <hr style={{ borderColor: props.color }}></hr>
        </div>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div
              className="cd-timeline-img cd-picture"
              style={{ backgroundColor: props.color }}
            ></div>

            <div
              className="cd-timeline-content"
              style={{ backgroundColor: props.color }}
            >
              <h2>Artlook Gallery</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  Junior Web Developer
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.dateF" />
                </span>
              </div>
              <p>
                <FormattedMessage id="header.message.exp.descF" />
              </p>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Wordpress</li>
              </ul>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div
              className="cd-timeline-img cd-picture"
              style={{ backgroundColor: props.color }}
            ></div>

            <div
              className="cd-timeline-content"
              style={{ backgroundColor: props.color }}
            >
              <h2>
                {" "}
                <FormattedMessage id="header.message.exp.course" />
              </h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.courseProf" />
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.courseYears" />
                </span>
              </div>
              <p>
                <FormattedMessage id="header.message.exp.courseProf2" />
              </p>
              <ul className="content-skills">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div
              className="cd-timeline-img cd-picture"
              style={{ backgroundColor: props.color }}
            ></div>

            <div
              className="cd-timeline-content"
              style={{ backgroundColor: props.color }}
            >
              <h2>Morele.net</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.staS" />
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.dateS" />
                </span>
              </div>
              <p>
                <FormattedMessage id="header.message.exp.descS" />
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div
              className="cd-timeline-img cd-picture"
              style={{ backgroundColor: props.color }}
            ></div>

            <div
              className="cd-timeline-content"
              style={{ backgroundColor: props.color }}
            >
              <h2>Selsoft Internet Provider</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.staT" />
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.dateT" />
                </span>
              </div>
              <p>
                <FormattedMessage id="header.message.exp.descT" />
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div
              className="cd-timeline-img cd-picture"
              style={{ backgroundColor: props.color }}
            ></div>

            <div
              className="cd-timeline-content"
              style={{ backgroundColor: props.color }}
            >
              <h2>Inper Nuevas Tecnologias</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.staFo" />
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.dateFo" />
                </span>
              </div>
              <p>
                <FormattedMessage id="header.message.exp.descFo" />
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div
              className="cd-timeline-img cd-picture"
              style={{ backgroundColor: props.color }}
            ></div>

            <div
              className="cd-timeline-content"
              style={{ backgroundColor: props.color }}
            >
              <h2>
                {" "}
                <FormattedMessage id="header.message.exp.school" />
              </h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.schoolProf" />
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <FormattedMessage id="header.message.exp.schoolYears" />
                </span>
              </div>
              <p>
                <FormattedMessage id="header.message.exp.schoolProf2" />
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Experience;
