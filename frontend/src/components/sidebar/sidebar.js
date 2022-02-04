import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col } from "react-bootstrap";

import "./sidebar.scss";

const Sidebar = () => {

  return (
    <div>
      <Row>
        <Col md={2} className="main-sidebar">
          <nav>
            <div className="sidebar-items">
              <div className="sidebar-item">
                <Link to="/home"> Explorar </Link>
              </div>
              
              <div className="sidebar-item">
                <Link to="/downloads"> Downloads </Link>
              </div>

              <div className="sidebar-item">
                <Link to="/library"> Biblioteca </Link>
              </div>

              <div className="sidebar-item">
                <Link to="/not-installed"> Não instalados </Link>
              </div>
            </div>
          </nav>
        </Col>
      </Row>
    </div>
  )
}

export default Sidebar;