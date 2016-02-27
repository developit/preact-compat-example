import React from 'react'
import DatePicker from 'react-toolbox/lib/date_picker';

const datetime = new Date(2015, 10, 16);
const min_datetime = new Date(new Date(datetime).setDate(8));
datetime.setHours(17);
datetime.setMinutes(28);

export default class DatepickerExample extends React.Component {

  state = {
    date1: datetime
  };

  handleChange = (item, value) => {
    this.setState({...this.state, [item]: value});
  };

  render () {
    return (
      <section>
        <DatePicker label='Birthdate' onChange={this.handleChange.bind(this, 'date1')} value={this.state.date1} />
        <DatePicker label='Expiration date' minDate={min_datetime} onChange={this.handleChange.bind(this, 'date2')} value={this.state.date2} />
      </section>
    );
  }

}
