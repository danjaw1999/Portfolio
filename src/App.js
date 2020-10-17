import React, { useState } from "react";
import Header from "./header";
import About from "./About";
import Stack from "./Stack";
import Done from "./Done";
import Setting from "./assets/settingicon.png";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import pl from "./assets/pl.png";
import en from "./assets/en.png";
import { IntlProvider } from "react-intl";
import { messages } from "./intl/intl";

function App() {
  const [locale, setLocale] = useState("en");
  const handleSetLocale = (e) => {
    const value = e.target.value;
    setLocale(value);
  };
  const [color, setColor] = useState("#dc3545");
  const handleSetColor = (ev) => {
    const color = ev.target.value;
    setColor(color);
  };
  const handleSwitcher = (eve) => {
    const switcher = document.querySelector(".switcher");
    switcher.classList.toggle("show");
  };
  // const handleDelete = (e) => {
  //   const switcher = document.querySelector(".switcher");
  //   switcher.classList.add("hide");
  //   switcher.classList.remove("show");
  // };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <div className="switchButton">
          <div className="spinning">
            <img classname="setting" src={Setting} onClick={handleSwitcher} />
          </div>
          <div className="switcher">
            <p className="x" onClick={handleSwitcher}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ height: 20 }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p>
            <span>LANGUAGE SWITCHER</span>
            <div>
              <button
                className="buttonflag"
                value="pl"
                style={{ backgroundColor: "#1f2233", border: "none" }}
                onClick={handleSetLocale}
              >
                <img
                  value="pl"
                  onClick={handleSetLocale}
                  src={pl}
                  alt="Poland"
                  className="flag"
                />
              </button>
              <button
                value="en"
                className="buttonflag"
                onClick={handleSetLocale}
                style={{ backgroundColor: "#1f2233", border: "none" }}
              >
                <img src={en} alt="England" className="flag" />
              </button>
            </div>

            <span>COLOR SWITCHER</span>
            <div>
              <button
                onClick={handleSetColor}
                value="#fdd05a"
                className="col yellow"
              ></button>
              <button
                onClick={handleSetColor}
                value="#f1a433"
                className="col orange"
              ></button>
              <button
                onClick={handleSetColor}
                value="#6610f2"
                className="col purple"
              ></button>{" "}
              <br />
              <button
                onClick={handleSetColor}
                value="#28a745"
                className="col green"
              ></button>
              <button
                onClick={handleSetColor}
                value="#e83e8c"
                className="col pink"
              ></button>
              <button
                onClick={handleSetColor}
                value="#dc3545"
                className="col red"
              ></button>
            </div>
          </div>
        </div>
        <Header color={color} />
        <About color={color} />
        <Stack color={color} />
        <Experience color={color} />
        <Done color={color} />
        <Contact color={color} />
        <Footer color={color} />
      </div>
    </IntlProvider>
  );
}

export default App;
