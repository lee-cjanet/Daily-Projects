import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs/tabs';
import Weather from './weather/weather';

const tabsContent = [
  {title: 'one', content: "hello world"},
  {title: 'two', content: 'Bonjour le monde'},
  {title: 'three', content: 'Hej Verden'}
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Clock />
        <Weather />
        <Tabs tabsContent={tabsContent}/>
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
