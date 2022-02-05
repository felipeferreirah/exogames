import React from "react";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./exoButton.scss";

const ExoButton = ({text, noText, action}) => {

  let history = useHistory();

  const goTo = () => {
    history.push(action);
  }

  return (
    <Button 
      className="exo-gradient exo-button" 
      onClick={ () => goTo() }
    >
      <b>{text}</b>

      <span className={noText ? "" : "exo-icon"}>
        <b>o</b>
      </span>
    </Button>
  )
}

export default ExoButton;