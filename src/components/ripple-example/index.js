import React from 'react'
import Ripple from 'react-toolbox/lib/ripple';

const CustomLink = (props) => (
  <a {...props} style={{position: 'relative'}}>
    {props.children}
  </a>
);

const RippleLink = Ripple({spread: 3})(CustomLink);
const RippleTest = () => <RippleLink>Test</RippleLink>;

export default class RadioExample extends React.Component {

  render () {
    return (
      <RippleTest />
    );
  }

}
