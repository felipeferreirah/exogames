import React from "react";

import { Row, Col } from "react-bootstrap";

import "./footer.scss";

const Footer = () => {

  let year = new Date().getFullYear();

  return (
    <Row>
      <Col md={12}>
        <div className="footer">
          ▲<b>XO</b> { `${year} @ todos os direitos reservados.`}
        </div>
      </Col>
    </Row>
  )
}

export default Footer;