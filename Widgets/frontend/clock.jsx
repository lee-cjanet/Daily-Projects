import React from 'react';

class Clock extends React.Component {
  constructor () {
    super();

    this.state = {
      time: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    let hour = this.state.time.getHours();
    let minute = this.state.time.getMinutes();
    let second = this.state.time.getSeconds();
    let midday = (hour < 12) ? 'AM' : 'PM';

    hour = (hour > 12) ? (hour - 12) : hour;
    hour = (hour < 10) ? `0${hour}` : hour;
    minute = (minute < 10) ? `0${minute}` : minute;
    second = (second < 10) ? `0${second}` : second;

    return(
      <div>
        <h1>Beginning of something beautiful</h1>
        <p>{hour} : {minute} : {second} {midday}</p>
      </div>
    );
  }

}

export default Clock;
