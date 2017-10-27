import React from 'react';

class Clock extends React.Component {
  constructor () {
    super();

    this.state = {
      time: new Date(),
    };

  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return(
      <div>
        <h1>Beginning of something beautiful</h1>
      </div>
    );
  }

}

export default Clock;
