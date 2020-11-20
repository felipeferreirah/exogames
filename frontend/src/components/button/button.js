import React from 'react';
import './button.scss';
import {Link} from 'react-router-dom';

function Button(props) {
  const sub = props.type;
  return (
    sub ?
    <button className={`${props.className || ''} button`} type="submit">{props.children || 'Enviar'}</button>
    :
    <Link className={`${props.className || ''} button`} to={props.to || '/'} onClick={props.onClick}> {props.children}</Link>
  );
}
export default Button;
