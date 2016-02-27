import React from 'react'
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox';

export default class MenuExample extends React.Component {

  render() {
    return (
      <IconMenu icon='more_vert' position='top-left' menuRipple>
        <MenuItem value='download' icon='get_app' caption='Download' />
        <MenuItem value='help' icon='favorite' caption='Favorite' />
        <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
        <MenuDivider />
        <MenuItem value='signout' icon='delete' caption='Delete' disabled />
      </IconMenu>
    )
  }

}
