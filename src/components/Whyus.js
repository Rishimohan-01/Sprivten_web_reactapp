import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Whyus() {
  return (
    <div id="Whyus">
      <Container>
        <Row>
          <Col>
            <h2 id="whyus_title" className="text-center py-2">
              WHY<span className="break"></span> CHOOSE US
            </h2>
            <p id="whyus_para" className="text-center">
              Problems trying to resolve the conflict between the two major
              <span className="break"></span>
              realms of Classical physics: Newtonian mechanics
            </p>
          </Col>
        </Row>
        <Row className="FeaturedCards">
          <Col lg={4} md={12} sm={12} className="py-3">
            <Card className="CardBody">
              <Card.Body style={{ padding: "0px" }}>
                <div className="card-title">
                  <Icon className="whyus-icon" icon="clarity:users-line" />
                  <h5>Web Development</h5>
                </div>
                <div className="CardFeatures">
                  <Card.Text className="text-start mb-2">
                    - The best products start with Figma
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Design with real data
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Lightning fast prototyping
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Fastest way to organize
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Work at the speed of thought.
                  </Card.Text>
                  <a href="#primary">Learn More</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="py-3">
            <Card className="CardBody">
              <Card.Body style={{ padding: "0px" }}>
                <div className="card-title">
                  <Icon className="whyus-icon" icon="fa-solid:award" />
                  <h5>National top 50 firms</h5>
                </div>
                <div className="CardFeatures">
                  <Card.Text className="text-start mb-2">
                    - The best products start with Figma
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Design with real data
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Lightning fast prototyping
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Fastest way to organize
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Work at the speed of thought.
                  </Card.Text>
                  <a href="#primary">Learn More</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="py-3">
            <Card className="CardBody">
              <Card.Body style={{ padding: "0px" }}>
                <div className="card-title">
                  <Icon className="whyus-icon" icon="carbon:notebook" />
                  <h5>Digital Marketing</h5>
                </div>
                <div className="CardFeatures">
                  <Card.Text className="text-start mb-2">
                    - The best products start with Figma
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Design with real data
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Lightning fast prototyping
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Fastest way to organize
                  </Card.Text>
                  <Card.Text className="text-start mb-2">
                    - Work at the speed of thought.
                  </Card.Text>
                  <a href="#primary">Learn More</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Whyus;
