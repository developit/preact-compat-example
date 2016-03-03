import React from 'react'
import Link from 'react-toolbox/lib/link';

export default class Home extends React.Component {

  render() {
    return (
      <nav>
        <Link href="/autocomplete-example" label="Autocomplete" />
        <Link href="/avatar-example" label="Avatar" />
        <Link href="/button-example" label="Button" />
        <Link href="/card-example" label="Card" />
        <Link href="/checkbox-example" label="Checkbox" />
        <Link href="/datepicker-example" label="Datepicker (FAIL, not setting initial state for date2 causes error, but with setting it, also error)"/>
        <Link href="/dialog-example" label="Dialog" />
        <Link href="/drawer-example" label="Drawer" />
        <Link href="/dropdown-example" label="Dropdown"/>
        <Link href="/fonticon-example" label="Fonticon" />
        <Link href="/input-example" label="Input" />
        <Link href="/link-example" label="Link" />
        <Link href="/list-example" label="List" />
        <Link href="/menu-example" label="Menu (FAIL, menu remains invisible)" />
        <Link href="/navigation-example" label="Navigation" />
        <Link href="/progressbar-example" label="Progress Bar" />
        <Link href="/radio-example" label="Radio Buttons (FAIL, but why ???)" />
        <Link href="/ripple-example" label="Ripple" />
        <Link href="/slider-example" label="Slider" />
        <Link href="/snackbar-example" label="Snackbar" />
        <Link href="/switch-example" label="Switch" />
        <Link href="/table-example" label="Table" />
        <Link href="/tabs-example" label="Tabs (FAIL: Cannot read property 'getBoundingClientRect' of undefined)" />
        <Link href="/tooltip-example" label="Tooltips" />
        <Link href="/timepicker-example" label="Timepicker (FAIL: Cannot read property 'handleCalculateShape' of undefined)" />
      </nav>
    )
  }

}
