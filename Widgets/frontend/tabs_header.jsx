import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.generateHeader = this.generateHeader.bind(this);
  }

  generateHeader() {
    let headers = this.props.tabsContent.map((tab, idx) => {
      let klass = '';
      if (this.props.currentTab === idx) {
        klass = 'active';
      }

      return (
        <li
          key={idx}
          className={ klass }
          onClick={this.props.onChangeTab.bind(null, idx)}
          >
          { tab.title }
        </li>
      );
    });

    return headers;
  }

  render() {
    return(
      <ul className='tabs-header'>
        { this.generateHeader() }
      </ul>
    );
  }
}
