import React from 'react'
import Drawer from 'react-toolbox/lib/drawer';
import {Button} from 'react-toolbox/lib/button';

export default class DrawerExample extends React.Component {

  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  actions = [
    { label: "Cancel", onClick: this.handleToggle },
    { label: "Save", onClick: this.handleToggle }
  ];

  render () {
    return (
      <div>
        <Button label='Show Drawer' raised accent onClick={this.handleToggle} />
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <h5>This is your Drawer.</h5>
          <p>You can embed any content you want, for example a Menu.</p>
        </Drawer>
      </div>
    );
  }

}
