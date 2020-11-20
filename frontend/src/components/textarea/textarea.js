import React from 'react';
import './textarea.scss';

function Textarea(props) {
  return (
  <div className={props.className}>
    {props.placetop && <p className="textarea__placetop">{props.placetop}</p>}
    <textarea
      className="textarea__element"
      placeholder={props.placeholder}
      onChange={props.onChange}
      required
      defaultValue={props.defaultValue}
    >
  {props.children}
  </textarea>
  </div>
  );
}
export default Textarea;
