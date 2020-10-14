import React from "react";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="textInContact">
          <span>
            <FormattedMessage id="contact.git" />
          </span>
          <h2>
            <FormattedMessage id="contact.contactMe" />
          </h2>
          <hr></hr>
        </div>
        <div className="formAndData">
          <div className="leftSiteContact">
            <div className="dataInContact">
              <div className="leftSiteData">
                <h4>
                  <FormattedMessage id="contact.loc" />
                </h4>
                <p></p>
              </div>
            </div>
            <div className="dataInContact">
              <div className="leftSiteData">
                <h4>
                  <FormattedMessage id="contact.ema" />
                </h4>
                <p></p>
              </div>
            </div>
            <div className="dataInContact">
              <div className="leftSiteData">
                <h4>
                  <FormattedMessage id="contact.phone" />
                </h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="rightSiteContact">
            <form>
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
              <input type="text" placeholder="Subject"></input>
              <textarea placeholder="Your Message"></textarea>
              <button>
                {" "}
                <FormattedMessage id="contact.button" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
