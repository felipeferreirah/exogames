import React from 'react';
import './input.scss';

function Input(props) {

  return (
  <div className={props.className}>
    {props.placetop && <p className="input__placetop">{props.placetop}</p>}
    <input
      defaultValue={props.defaultValue}
      className="input__element"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required
      pattern={props.pattern}

      maxLength={props.maxLength}
    />
  </div>
  );
}
export default Input;
