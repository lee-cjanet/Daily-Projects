import React from 'react';
import Header from './tabs_header';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    };

    this.onChangeTab = this.onChangeTab.bind(this);
  }

  onChangeTab(tab) {
    this.setState({
      selectedTab: tab
    });
  }

  render() {
    const currentTab = this.props.tabsContent[this.state.selectedTab];

    return(
      <div className='tabs'>
        <Header
          currentTab = { this.state.selectedTab }
          tabsContent = { this.props.tabsContent }
          onChangeTab = { this.onChangeTab }
          />
        <article>
          { currentTab.content }
        </article>
      </div>
    );
  }
}
