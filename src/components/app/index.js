import React from 'react';
import ToolboxApp from 'react-toolbox/lib/app';
import Router from 'preact-router';
import Home from '../home';
import Header from '../header';
import AutocompleteExample from '../autocomplete-example';
import AvatarExample from '../avatar-example';
import ButtonExample from '../button-example';
import CardExample from '../card-example';
import CheckboxExample from '../checkbox-example';
import DatepickerExample from '../datepicker-example';
import DialogExample from '../dialog-example';
import DrawerExample from '../drawer-example';
import DropdownExample from '../dropdown-example';
import FonticonExample from '../fonticon-example';
import InputExample from '../input-example';
import LinkExample from '../link-example';
import ListExample from '../list-example';
import MenuExample from '../menu-example';
import NavigationExample from '../navigation-example';
import ProgressBarExample from '../progressbar-example';
import RadioExample from '../radio-example';
import RippleExample from '../ripple-example';
import SliderExample from '../slider-example';
import SnackbarExample from '../snackbar-example';
import SwitchExample from '../switch-example';
import TableExample from '../table-example';
import TabsExample from '../tabs-example';
import TooltipExample from '../tooltip-example';
import TimepickerExample from '../timepicker-example';
import style from './style';

export default class App extends React.Component {

  render() {
    return (
      <ToolboxApp>
        <Header />
        <section className={style.content}>
          <Router>
            <Home path="/" />
            <AutocompleteExample path="/autocomplete-example" />
            <AvatarExample path="/avatar-example" />
            <ButtonExample path="/button-example" />
            <CardExample path="/card-example" />
            <CheckboxExample path="/checkbox-example" />
            <DatepickerExample path="/datepicker-example" />
            <DialogExample path="/dialog-example" />
            <DrawerExample path="/drawer-example" />
            <DropdownExample path="/dropdown-example" />
            <FonticonExample path="/fonticon-example" />
            <InputExample path="/input-example" />
            <LinkExample path="/link-example" />
            <ListExample path="/list-example" />
            <MenuExample path="/menu-example" />
            <NavigationExample path="/navigation-example" />
            <ProgressBarExample path="/progressbar-example" />
            <RadioExample path="/radio-example" />
            <RippleExample path="/ripple-example" />
            <SliderExample path="/slider-example" />
            <SnackbarExample path="/snackbar-example" />
            <SwitchExample path="/switch-example" />
            <TableExample path="/table-example" />
            <TabsExample path="/tabs-example" />
            <TooltipExample path="/tooltip-example" />
            <TimepickerExample path="/timepicker-example" />
          </Router>
        </section>
      </ToolboxApp>
    )
  }

}
