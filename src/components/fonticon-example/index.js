import React from 'react'
import FontIcon from 'react-toolbox/lib/font_icon';

export default class FonticonExample extends React.Component {

  render () {
    return (
      <span>
        <FontIcon value='add' />
        <FontIcon value='menu' />
        <FontIcon value='favorite' />
      </span>
    );
  }

}
