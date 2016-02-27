import React from 'react'
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

export default class NavigationExample extends React.Component {

  render() {
    return (
      <div>
        <Navigation type='horizontal' actions={actions} />
        <Navigation type='vertical'>
          <Link href='http://' label='Inbox' icon='inbox' />
          <Link href='http://' active label='Profile' icon='person' />
        </Navigation>
      </div>
    )
  }

}
