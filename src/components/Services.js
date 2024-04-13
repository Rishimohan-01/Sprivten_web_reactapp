import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../assets/images/cover.jpg";

function Services() {
  return (
    <div id="services" className="Services">
      <Container>
        <Row>
          <Col>
            <div>
              <h2 id="services_title" className="text-center py-3">
                We are providing best<span className="break"></span> business
                service.
              </h2>
              <p id="services_para" className="text-center pb-5">
                Problems trying to resolve the conflict between the two major
                realms
                <span className="break"></span>
                of Classical physics: Newtonian mechanics
              </p>
              <div className="mt-2   justify-content-center d-flex flex-wrap">
                <video className="w-75" controls poster={image}>
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-girl-working-on-a-computer-4938-large.mp4"
                    type="video/mp4"
                    allowFullScreen
                  />
                </video>
                {/* <img className="Service-images w-70" src={image} alt="" /> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
