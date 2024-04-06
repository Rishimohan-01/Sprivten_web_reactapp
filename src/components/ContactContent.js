import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ContactContent() {
  return (
    <div className="ContactContent">
      <Container>
        <Row>
          <Col lg={8} md={8}>
            <h3 className="ContactContent_title">
              Consulting Agency For Your Business
            </h3>
            <p className="ContactContent_para">
              the quick fox jumps over the lazy dog
            </p>
          </Col>
          <Col id="ContactContent_btn" lg={4} md={4}>
            <Button className="Contact_btn text-lg-right">Contact Us</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactContent;
