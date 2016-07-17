import React from 'react'
import { route } from 'preact-router';
import Link from 'react-toolbox/lib/link';

export default class Home extends React.Component {
  state = {
    links: [
      ["autocomplete-example", "Autocomplete"],
      ["avatar-example", "Avatar"],
      ["button-example", "Button"],
      ["card-example", "Card"],
      ["checkbox-example", "Checkbox"],
      ["datepicker-example", "Datepicker"],
      ["dialog-example", "Dialog"],
      ["drawer-example", "Drawer"],
      ["dropdown-example", "Dropdown"],
      ["fonticon-example", "Fonticon"],
      ["input-example", "Input"],
      ["link-example", "Link"],
      ["list-example", "List"],
      ["menu-example", "Menu (FAIL, menu remains invisible)"],
      ["navigation-example", "Navigation"],
      ["progressbar-example", "Progress Bar"],
      ["radio-example", "Radio Buttons"],
      ["ripple-example", "Ripple"],
      ["slider-example", "Slider"],
      ["snackbar-example", "Snackbar"],
      ["switch-example", "Switch"],
      ["table-example", "Table"],
      ["tabs-example", "Tabs"],
      ["tooltip-example", "Tooltips"],
      ["timepicker-example", "Timepicker"]
    ]
  };

  linkClick(e) {
    route((e.currentTarget || e.target).getAttribute('href'));
    return e.preventDefault(), false;
  }

  render() {
    return (
      <nav>
        { this.state.links.map( ([ href, label ]) => (
          <Link {...{href, label}} onClick={this.linkClick} />
        ))}
      </nav>
    )
  }

}
