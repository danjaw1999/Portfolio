import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <header>
      <div className="darker-video">
        <div className="container">
          <div className="upperSiteHeader">
            <div className="left-site">Jaworski Daniel</div>
            <div className="nav-bar">
              <ul>
                <li>
                  <FormattedMessage id="header.message.menu.home" />
                </li>
                <li>
                  <FormattedMessage id="header.message.menu.about" />
                </li>
                <li>
                  <FormattedMessage id="header.message.menu.services" />
                </li>
                <li>
                  <FormattedMessage id="header.message.menu.resume" />
                </li>
                <li>
                  <FormattedMessage id="header.message.menu.portfolio" />
                </li>
                <li>
                  <FormattedMessage id="header.message.menu.contact" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
