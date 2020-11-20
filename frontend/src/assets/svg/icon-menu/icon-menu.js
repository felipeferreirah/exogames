import React from 'react';
import './icon-menu.scss';

export default function IconMenu(props) {
  const className = props.className ? props.className : '';

  return (
    <div id="nav-icon"  className={ `${ className }`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}


