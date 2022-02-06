import React from 'react';
import { Row, Col } from "react-bootstrap";

import './library.scss';

function Library() {


  return (
    <Row>
      <Col md={{ span: 10, offset: 2 }} className="col-content">
        <div className="library">
          <div className="space" />

          <h1>Biblioteca</h1>
        </div>
      </Col>
    </Row>
  );

}

export default Library;
