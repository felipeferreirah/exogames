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
            <div class="input-group mb-3">
              <input 
                type="text" 
                class="form-control input-main-search" 
                placeholder="Games, Filmes ou Músicas..." 
                aria-label="Games, Filmes ou Músicas..." 
                aria-describedby="main-search"
              />
                
              <div class="button-main-search">
                <ExoButton text="o" action="/download" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Header;