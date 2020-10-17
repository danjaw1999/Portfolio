import React from "react";
import { FormattedMessage } from "react-intl";
import fb from "./assets/fb.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import instagram from "./assets/instagram.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="textInFooter">
          <div className="socials">
            <a href="https://www.facebook.com/danjaw1999/" target="_blank">
              <img src={fb} className="fb" alt="facebook icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-jaworski1999"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="https://github.com/danjaw1999" target="_blank">
              <img src={github} alt="github icon" />
            </a>
            <a href="https://www.instagram.com/danjaw1999/" target="_blank">
              <img src={instagram} alt="instagram icon" />
            </a>
          </div>
          <span>
            {" "}
            <FormattedMessage id="footer.text" />
          </span>
        </div>
      </div>
    </section>
  );
};
export default Footer;
