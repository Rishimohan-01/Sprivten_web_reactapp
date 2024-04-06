import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import user1 from "../assets/images/user-1.png";
import user2 from "../assets/images/user-2.png";
import { Icon } from "@iconify/react";

function Testimonials() {
  return (
    <div id="Testimonials">
      <Container>
        <Row>
          <Col>
            <h2 className="testimonials_title text-center py-2">
              What <span className="break"></span> Clients Say
            </h2>
            <p className="testimonials_para text-center">
              Problems trying to resolve the conflict between the two major
              <span className="break"></span>
              realms of Classical physics: Newtonian mechanics
            </p>
          </Col>
        </Row>
        <Row className="TestimonialCards">
          <Col lg={4} md={12} sm={12} className="py-3">
            <Card>
              <Card.Body className="CardBody">
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bx:star" />
                <Card.Text className="Testimonials_feedback text-start">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.
                </Card.Text>
                <div className="Clients">
                  <div>
                    <img src={user1} alt="" />
                  </div>
                  <div>
                    <p className="text-start">
                      <a href="#Regina Miles">Regina Miles</a>
                    </p>
                    <p className="text-start">Designer</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="py-3">
            <Card>
              <Card.Body className="CardBody">
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bx:star" />
                <Card.Text className="Testimonials_feedback text-start">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.
                </Card.Text>
                <div className="Clients">
                  <div>
                    <img src={user2} alt="" />
                  </div>
                  <div>
                    <p className="text-start">
                      <a href="#Regina Miles">Regina Miles</a>
                    </p>
                    <p className="text-start">Designer</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="py-3">
            <Card>
              <Card.Body className="CardBody">
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bxs:star" />
                <Icon className="icon-star" icon="bx:star" />
                <Card.Text className="Testimonials_feedback text-start">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.
                </Card.Text>
                <div className="Clients">
                  <div>
                    <img src={user1} alt="" />
                  </div>
                  <div>
                    <p className="text-start">
                      <a href="#Regina Miles">Regina Miles</a>
                    </p>
                    <p className="text-start">Designer</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
