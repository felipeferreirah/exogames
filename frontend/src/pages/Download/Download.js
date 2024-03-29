import React from 'react';
import { Row, Col } from "react-bootstrap";

import './download.scss';

function Download() {


  return (
    <Row>
      <Col md={{ span: 10, offset: 2 }} className="col-content">
        <div className="downloads">
          <div className="space" />

          <h1>Downloads</h1>
        </div>
      </Col>
    </Row>
  );

}

export default Download;
