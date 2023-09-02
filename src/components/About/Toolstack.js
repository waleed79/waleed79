import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJupyter, 
  SiAndroidstudio,
  SiVisualstudiocode,
  SiSlack,
  SiLinux,
  SiOverleaf,
  SiLatex,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      { <Col xs={4} md={2} className="tech-icons">
        <SiOverleaf />
      </Col> }
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex />
      </Col>
    </Row>
  );
}

export default Toolstack;
