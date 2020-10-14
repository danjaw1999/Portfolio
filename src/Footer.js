import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="textInFooter">
          <span>Jaworski Daniel</span>
          ikonki
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
