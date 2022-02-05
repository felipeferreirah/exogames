import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";

import ExoButton from "../exoButton/exoButton";

import "./header.scss";

const Header = () => {

  return (
    <div className="main-header">
      <Row>
        <Col md={1}>
          <div className="main-logo">
            <Dropdown>
              <Dropdown.Toggle
                className="exo-gradient"
                variant="success"
                id="dropdown-basic"
              >
                Games
              </Dropdown.Toggle>

              <Dropdown.Menu className="exo-drop-menu">
                <Dropdown.Item className="exo-drop-item" href="/music">Músicas</Dropdown.Item>
                <Dropdown.Item className="exo-drop-item" href="/movies">Filmes</Dropdown.Item>
                <Dropdown.Item className="exo-drop-item" href="/adult">Adulto</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>

        <Col md={{ span: 10, offset: 1 }}>
          <div className="main-search">
            <div className="input-group mb-3" style={{overflow: 'hidden'}}>
              <input 
                type="text" 
                className="form-control input-main-search" 
                placeholder="Games, Filmes ou Músicas..." 
                aria-label="Games, Filmes ou Músicas..." 
                aria-describedby="main-search"
              />
                
              <div className="button-main-search">
                <ExoButton noText action="/download" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Header;