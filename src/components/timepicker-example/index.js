import React from 'react'
import TimePicker from 'react-toolbox/lib/time_picker';

let time = new Date();
time.setHours(17);
time.setMinutes(28);

export default class TimepickerExample extends React.Component {

  state = {time};

  handleChange = (time) => {
  	this.setState({time});
  };

  render () {
  	return <TimePicker label='Finishing time' onChange={this.handleChange} value={this.state.time} />;
  }

}
