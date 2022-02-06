import React from "react";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./exoButton.scss";

const ExoButton = ({text, noText, action}) => {

  let history = useHistory();

  const goTo = () => {
    if (typeof action == "function"){
      action();
    }else{
      history.push(action);
    }
  }

  return (
    <Button 
      className="exo-gradient exo-button" 
      onClick={ () => goTo() }
    >
      {!noText && (
        <span className="exo-button-text">
          <b>{text}</b>
        </span>
      )}

      <span className={noText ? "" : "exo-icon"}>
        <b>o</b>
      </span>
    </Button>
  )
}

export default ExoButton;