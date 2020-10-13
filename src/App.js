import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Stack from "./Stack";
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
      <select id="locale" name="locale" onChange={handleSetLocale}>
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
      <div className="App">
        <Header />
        <About />
        <Stack />
      </div>
    </IntlProvider>
  );
}

export default App;
