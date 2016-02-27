import React from 'react'
import Link from 'react-toolbox/lib/link';

export default class LinkExample extends React.Component {

  render() {
    return (
      <nav>
        <Link href="#/components/link" label="Work" count={4} icon='business' />
        <Link href="#/components/link" label="Blog" icon='speaker_notes' />
        <Link href="#/components/link" label="Explore" icon='explore' />
      </nav>
    )
  }

}
