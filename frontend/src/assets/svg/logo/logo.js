import React from "react";
import './logo.scss';

  function Logo(props) {
    const color      = props.color || 'white';
    const className = props.className;
    const stroke = props.stroke || '1';

    return (

      <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ isolation: "isolate" }}
      width="404.723"
      height="78.17pt"
      viewBox="343.5 -69.67 303.542 78.17"
      className={ `logo  ${ className }`}
      fill={color}
    >
      <defs>
        <clipPath id="_clipPath_6dMNwCdOySyGZJKbbzTfLOlWsCTATMxi">
          <path d="M343.5 -69.67H647.0419999999999V8.5H343.5z"></path>
        </clipPath>
      </defs>
      <g clip-path="url(#_clipPath_6dMNwCdOySyGZJKbbzTfLOlWsCTATMxi)">
        <path
          fill="none"
          stroke={color}
          strokeLinecap="square"
          strokeMiterlimit="3"
          strokeWidth={stroke}
          d="M347-66.17h71.17V5H347v-71.17h0zm260.957 0h0c19.64 0 35.585 15.945 35.585 35.585h0C643.542-10.945 627.597 5 607.957 5h0c-19.64 0-35.585-15.945-35.585-35.585h0c0-19.64 15.945-35.585 35.585-35.585h0zm-150.248 0L528.879 5l-35.585-35.585-35.585-35.585h0zm0 71.17l35.585-35.585 35.585-35.585L457.709 5z"
          vectorEffect="non-scaling-stroke"
        ></path>
      </g>
    </svg>
  )};


export default Logo;


