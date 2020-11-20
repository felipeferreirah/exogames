import React from 'react';

import './nav.scss'
import { Link } from 'react-router-dom'
// import IconHome from '../../assets/svg/icon-home';

export default function Nav(props) {

  return (
  <>
    <nav className={ `nav  ${ props.className }`}>
      <a href="#venture" >  GAMES     </a>
      <a href="#how" >      LIBARY        </a>
      <a href="#team" >     PREFERENCES             </a>
      <Link to="/download" >  DOWNLOAD             </Link>
    </nav>
  </>
  );
}


