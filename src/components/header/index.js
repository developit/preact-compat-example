import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends React.Component {

  render(props) {
    return (
      <AppBar className={style.appbar} flat>
        <h1 className={style.title}>
          <Link href="/">React Toolbox Examples</Link>
        </h1>
        <Button className={style.button} icon="add" onclick={ () => { alert("hello world") } } floating accent />
      </AppBar>
    )
  }

}
