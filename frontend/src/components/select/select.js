import React from 'react';
import './select.scss';

function Select(props) {
  return (
  <div className={props.className}>
    {props.placetop && <p className="input__placetop">{props.placetop}</p>}
      <select
        className="select__element"
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      >
        {props.children}
    </select>
 </div>
  );
}
export default Select;
