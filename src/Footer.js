import React from "react";
import { FormattedMessage } from "react-intl";
import fb from "./assets/fb.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import instagram from "./assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer" name="footer">
      <div className="container">
        <div className="textInFooter">
          <div className="socials">
            <a href="https://www.facebook.com/danjaw1999/" rel="noopener noreferrer" target="_blank">
              <img src={fb} className="fb" alt="facebook icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-jaworski1999"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin icon" className="ld" />
            </a>
            <a href="https://github.com/danjaw1999" rel="noopener noreferrer" target="_blank">
              <img src={github} alt="github icon" className="github" />
            </a>
            <a href="https://www.instagram.com/danjaw1999/" rel="noopener noreferrer" target="_blank">
              <img src={instagram} alt="instagram icon" className="ig" />
            </a>
          </div>
          <span>
            {" "}
            <FormattedMessage id="footer.text" />
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
