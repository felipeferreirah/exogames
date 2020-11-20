import React,{useState} from 'react';
import './header.scss';
import Nav from './../nav/nav';
import Logo from './../../assets/svg/logo/logo';
import IconMenu from './../../assets/svg/icon-menu/icon-menu'; 
import {Link} from 'react-router-dom';

 function Header() { 

 
 
  return (
      <>
        <header className= 'home--banner header'  >
          <div  className='header__top'>
            <Link to="/" className="header__logo">
              <Logo className="header__svg" />
            </Link>
            <div>
              <IconMenu className='open'></IconMenu>
            </div>
            <Nav className= 'header__nav'/>
          </div>
           
        </header>
      </>
    );
  }
export default Header;
