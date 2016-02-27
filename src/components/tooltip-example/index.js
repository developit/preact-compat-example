import React from 'react'
import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Tooltip from 'react-toolbox/lib/tooltip';
import Link from 'react-toolbox/lib/link';

const TooltipButton = Tooltip(Button);
const TooltipInput = Tooltip(Input);
const TooltipLink = Tooltip(Link);

export default class TooltipExample extends React.Component {

  render () {
    return (
      <div>
        <TooltipButton label='Bookmark' icon='bookmark' raised primary tooltip='Bookmark Tooltip' tooltipDelay={1000} />
        <TooltipButton icon='add' floating accent tooltip='Floating Tooltip' />
        <TooltipLink count={42} href="#" label="The answer is" icon='speaker_notes' tooltip='Question - universe?'/>
        <TooltipInput tooltip='lorem ipsum...' />
      </div>
    );
  }

}
