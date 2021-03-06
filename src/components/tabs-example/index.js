import React from 'react'
import {Tab, Tabs} from 'react-toolbox';

export default class TabsExample extends React.Component {

  state = {
    index: 1
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  render () {
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange}>
        <Tab label='Primary'><small>Primary content</small></Tab>
        <Tab label='Secondary'><small>Secondary content</small></Tab>
        <Tab label='Third' disabled><small>Disabled content</small></Tab>
        <Tab label='Fourth' hidden><small>Fourth content hidden</small></Tab>
        <Tab label='Fifth'><small>Fifth content</small></Tab>
      </Tabs>
    );
  }

}
