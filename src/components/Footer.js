import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Footer() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="footer">
      <div className="footer-body">
        <Container>
          <Row className="border-bottom">
            <Col lg={6} md={6} sm={12} className="footer-logo">
              <h3>Sprivaten</h3>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex justify-content-end align-center footer-social"
            >
              <a href="#fb" target="_blank">
                <Icon icon="ant-design:facebook-filled" />
              </a>
              <a href="#ins" target="_blank">
                <Icon icon="basil:instagram-outline" />
              </a>
              <a href="#tw" target="_blank">
                <Icon icon="fa-brands:twitter" />
              </a>
              <a href="#yt" target="_blank">
                <Icon icon="ant-design:youtube-filled" />
              </a>
            </Col>
          </Row>
          <Row className="footer-links">
            <Col lg={2} md={3}>
              <h5>Company Info</h5>
              <ul className="list-unstyled ps-0">
                <li>
                  <a href="aboutUs">About Us</a>
                </li>
                <li>
                  <a href="carrier">Carrier</a>
                </li>
                <li>
                  <a href="weAreHiring">We are hiring</a>
                </li>
                <li>
                  <a href="blog">Blog</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={3}>
              <h5>Legal</h5>
              <ul className="list-unstyled ps-0">
                <li>
                  <a href="aboutUs">About Us</a>
                </li>
                <li>
                  <a href="#carrier">Carrier</a>
                </li>
                <li>
                  <a href="weAreHiring">We are hiring</a>
                </li>
                <li>
                  <a href="blog">Blog</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={3}>
              <h5>Features</h5>
              <ul
                className="list-unstyled
               ps-0"
              >
                <li>
                  <a href="busiMark">Business Marketing</a>
                </li>
                <li>
                  <a href="userAnalytic">User Analytic</a>
                </li>
                <li>
                  <a href="livechat">Live Chat</a>
                </li>
                <li>
                  <a href="unlimitedsupport">Unlimited Support</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={3}>
              <h5>Features</h5>
              <ul className="list-unstyled ps-0">
                <li>
                  <a href="ios&android">IOS & Android</a>
                </li>
                <li>
                  <a href="watchdemo">Watch a Demo</a>
                </li>
                <li>
                  <a href="customers">Customers</a>
                </li>
                <li>
                  <a href="api">API</a>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={12}>
              <h5>Get in touch</h5>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustomUsername">
                  <InputGroup hasValidation>
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <InputGroup.Text id="inputGroupPrepend">
                      <Button type="submit">Subscribe</Button>
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      Please type correct email address.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-Copyright-text">
        <Container>
          <Row>
            <Col lg={12}>
              <p>Coded by Team Frontendone.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
