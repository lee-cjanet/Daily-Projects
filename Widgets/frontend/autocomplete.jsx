import React from 'react';

export default class Autocomplete extends React.Component {
  constructor() {
    super();

    this.state = {
      inputVal: ""
    };

    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.displayList = this.displayList.bind(this);
    this.matchedList = this.matchedList.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  onUpdateInput(event) {
    event.preventDefault();
    this.setState({
      inputVal: event.currentTarget.value
    });
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  matchedList() {
    let matched = [];
    let input = this.state.inputVal;
    if (input === "") {
      matched = this.props.list;
    } else {
      this.props.list.map((word, idx) => {
        if (word.toLowerCase().includes(input.toLowerCase())) {
          matched.push(word);
        }
      });
    }
    return matched;
  }

  displayList() {
    let list = this.matchedList().map((word, idx) => {
      return(
        <div>
        <li
          key={idx}
          onClick={this.selectName}>
          {word}
        </li>
        <br/>
        </div>
      );
    });
    return list;
  }

  render() {
    return(
      <div className="autocomplete">
        <h1>Autocomplete</h1>
        <input
          onChange={this.onUpdateInput}
          value={this.state.inputVal}
          placeholder='searching...'
          />
        <ul>
          {this.displayList()}
        </ul>
      </div>
    );
  }
}
