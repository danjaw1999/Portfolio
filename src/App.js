import React, { useState } from "react";
import Header from "./header";
import About from "./About";
import Stack from "./Stack";
import Done from "./Done";
import Setting from "./assets/settingicon.png";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { IntlProvider } from "react-intl";
import { messages } from "./intl/intl";

function App() {
  const [locale, setLocale] = useState("en");
  const handleSetLocale = (e) => {
    const value = e.target.value;
    setLocale(value);
  };
  const [color, setColor] = useState("#fdd05a");
  const handleSetColor = (ev) => {
    const color = ev.target.value;
    setColor(color);
  };
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {/* <select id="locale" name="locale" onChange={handleSetLocale}>
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
      <select id="color" name="color" onChange={handleSetColor}>
        <option value="#fdd05a">yellow</option>
        <option value="#f1a433">orange</option>
      </select> */}
      <div className="App">
        <div className="switchButton">
          <img src={Setting} />
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
