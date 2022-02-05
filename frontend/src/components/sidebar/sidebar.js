import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col } from "react-bootstrap";

import "./sidebar.scss";

const Sidebar = () => {

  return (
    <div className="main-sidebar">
      <Row>
        <Col md={12}>
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

      <div className="space" />

      <Row>
        <Col md={12}>
          <nav>
            <div className="sidebar-items">
              <h3 className="sidebar-section"> Servidores </h3>

              <div className="sidebar-item">
                <Link to="/pirate-bay"> The Pirate Bay </Link>
              </div>

              <div className="sidebar-item">
                <Link to="/3xxy"> 3xxy </Link>
              </div>

              <div className="sidebar-item">
                <Link to="/torrent-film"> TorrentFilm </Link>
              </div>

              <div className="sidebar-item">
                <Link to="/x3-films"> x3Films </Link>
              </div>

              <div className="sidebar-item">
                <Link to="/juan-carlos"> Juan Carlos </Link>
              </div>
            </div>
          </nav>
        </Col>
      </Row>
    </div>
  )
}

export default Sidebar;