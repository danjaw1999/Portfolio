import React, { useState } from "react";
import Header from "./header";
import About from "./About";
import Stack from "./Stack";
import Done from "./Done";
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
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {/* <select id="locale" name="locale" onChange={handleSetLocale}>
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select> */}
      <div className="App">
        <Header />
        <About />
        <Stack />
        <Experience />
        <Done />
        <Contact />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
