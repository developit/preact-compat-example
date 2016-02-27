import React from 'react'
import Autocomplete from 'react-toolbox/lib/autocomplete';

const source = {'ES-es': 'Spain', 'TH-th': 'Thailand', 'EN-gb': 'England', 'EN-en': 'USA'};

export default class AutocompleteExample extends React.Component {

  state = {
    countries: ['ES-es', 'TH-th']
  }

  handleChange = (value) => {
    this.setState({countries: value});
  };

  render () {
    return (
      <Autocomplete
        direction="down"
        label="Choose countries"
        name="countries"
        onChange={this.handleChange}
        source={source}
        value={this.state.countries}
      />
    );
  }

}
