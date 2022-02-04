import React from "react";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./exoButton.scss";

const ExoButton = ({text, action}) => {

  let history = useHistory();

  const goTo = () => {
    history.push(action);
  }

  return (
    <Button 
      className="exo-gradient exo-button" 
      onClick={ () => goTo() }
    >
      {text}
    </Button>
  )
}

export default ExoButton;