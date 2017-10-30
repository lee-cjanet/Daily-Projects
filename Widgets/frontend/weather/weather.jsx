import React from 'react';
import weatherAPI from './weatherAPI';

export default class Weather extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "",
      weather: "",
      kelvin: ""
    };

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.fetchWeather(position.coords.latitude, position.coords.longitude);
    });
  }

  componentWillUnmount() {
    this.setState({
      city: "",
      weather: "",
      kelvin: ""
    });
  }

  fetchWeather(lat, lon) {
    let that = this;
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
           if (request.status == 200) {
              let response = JSON.parse(request.responseText);
              that.setState({
                city: response.name,
                weather: response.weather[0].description,
                kelvin: response.main.temp
              });
              //  document.getElementById("temperature").innerHTML = response;
           }
           else if (request.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    request.open("GET", weatherAPI(lat, lon), true);
    request.send();
  }

  render() {
    let { kelvin, city, weather } = this.state;
    let temp = (kelvin === "") ? "" : `${Math.floor(100*(kelvin - 273.15))/100}°C`;

    return(
      <div className='weather'>
        <h1> Weather </h1>
        <span id='temperature'>
          {city} <br/>
          {weather} <br/>
          {temp}
        </span>
      </div>
    );
  }
}
