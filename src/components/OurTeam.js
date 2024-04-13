import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import person1 from "../assets/images/person-1.png";
import person2 from "../assets/images/person-2.png";
import person3 from "../assets/images/person-3.png";
import { Icon } from "@iconify/react";

function OurTeam() {
  return (
    <div id="ourteam" className="ourTeam">
      <Container>
        <Row>
          <Col>
            <h2 id="OurTeam_title" className="text-center py-3 ">
              Meet Our <span className="break"></span> Team
            </h2>
            <p className="text-center ">
              Problems trying to resolve the conflict between the two major
              <span className="break"></span> realms of Classical physics:
              Newtonian mechanics
            </p>
          </Col>
        </Row>
        <Row className="Team_members">
          <Col lg={4} md={12} sm={12} className="member-card">
            <Card style={{ borderRadius: "0px" }}>
              <Card.Img
                style={{ borderRadius: "0px" }}
                variant="top"
                src={person1}
              />
              <Card.Body>
                <Card.Title className="text-center">Avie Beaton</Card.Title>
                <Card.Text>CO Founder</Card.Text>
                <div className="team-icon text-center">
                  <a href="#Facebook">
                    <Icon icon="ant-design:facebook-filled" />
                  </a>
                  <a href="#instagram">
                    <Icon icon="basil:instagram-outline" />
                  </a>
                  <a href="#twitter">
                    <Icon icon="fa-brands:twitter" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="member-card">
            <Card style={{ borderRadius: "0px" }}>
              <Card.Img
                style={{ borderRadius: "0px" }}
                variant="top"
                src={person2}
              />
              <Card.Body>
                <Card.Title className="text-center">Ben Jonson</Card.Title>
                <Card.Text>Consultant</Card.Text>
                <div className="team-icon text-center">
                  <a href="#Facebook">
                    <Icon icon="ant-design:facebook-filled" />
                  </a>
                  <a href="#instagram">
                    <Icon icon="basil:instagram-outline" />
                  </a>
                  <a href="#twitter">
                    <Icon icon="fa-brands:twitter" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="member-card">
            <Card style={{ borderRadius: "0px" }}>
              <Card.Img
                style={{ borderRadius: "0px" }}
                variant="top"
                src={person3}
              />
              <Card.Body>
                <Card.Title className="text-center">Ashley Fletcher</Card.Title>
                <Card.Text>CEO</Card.Text>
                <div className="team-icon text-center">
                  <a href="#Facebook">
                    <Icon icon="ant-design:facebook-filled" />
                  </a>
                  <a href="#instagram">
                    <Icon icon="basil:instagram-outline" />
                  </a>
                  <a href="#twitter">
                    <Icon icon="fa-brands:twitter" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;
