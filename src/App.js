import React, { useState } from "react";
import Header from "./header";
import { IntlProvider, FormattedMessage } from "react-intl";
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
        <option value="pl">pl</option>
        <option value="en">en</option>
      </select>
      <div className="App">
        <Header />
      </div>
    </IntlProvider>
  );
}

export default App;
