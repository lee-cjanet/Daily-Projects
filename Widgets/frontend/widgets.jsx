import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs/tabs';
import Weather from './weather/weather';
import Autocomplete from './autocomplete';

const tabsContent = [
  {title: 'one', content: "hello world"},
  {title: 'two', content: 'Bonjour le monde'},
  {title: 'three', content: 'Hej Verden'}
];

const countries = [
"Afghanistan",
"Albania",
"Algeria",
"Argentina",
"Bahamas",
"Bermuda",
"Cambodia",
"Canada",
"Denmark",
"Dominica",
"Egypt",
"Finland",
"France",
"Georgia",
"Germany",
"Ghana",
"Haiti",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran",
"Iraq",
"Laos",
"Libya",
"Malaysia",
"Mexico",
"Monaco",
"Mongolia",
"Morocco",
"Netherlands",
"Norway",
"Oman",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Romania",
"Serbia",
"Singapore",
"Spain",
"Sudan",
"Sweden",
"Switzerland",
"Syria",
"Thailand",
"Turkey",
"Uganda",
"Uruguay",
"Vietnam",
"Yemen",
"Zambia"
];

class Root extends React.Component {
  render() {
    return(
      <div>
      <h2>Clock</h2>
        <Clock />
        <h2>Weather</h2>
        <Weather />
        <div className="interactive">
          <section>
            <h2>Tabs</h2>
            <Tabs tabsContent={tabsContent} />
          </section>
         <section>
            <h2>Autocomplete</h2>
            <Autocomplete list={countries} />
         </section>
        </div>
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
