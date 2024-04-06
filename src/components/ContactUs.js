import { useState } from "react";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";

function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // Dropdown  menu
  const options2 = [
    { value: "Item-1", label: "Item-1" },
    { value: "Item-2", label: "Item-2" },
    { value: "Item-3", label: "Item-3" },
  ];

  const options3 = [
    { value: "4:00 Available", label: "4:00 Available" },
    { value: "6:00 Available", label: "6:00 Available" },
    { value: "8:00 Available", label: "8:00 Available" },
  ];
  // Dropdown  menu

  return (
    <div className="Contact">
      <Container>
        <Row>
          <Col>
            <h5>Contact Us</h5>
            <h2>Make an Appointment</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} xs={12}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  lg="6"
                  className="mb-3"
                  controlId="validationCustom01"
                >
                  <Form.Control required type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  lg="6"
                  className="mb-3"
                  controlId="validationCustom02"
                >
                  <Form.Control required type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  lg="6"
                  className="mb-3"
                  controlId="validationCustom03"
                >
                  <Select
                    isSearchable={false}
                    placeholder="Please Select"
                    options={options2}
                  />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  Please select your Department.
                </Form.Control.Feedback>

                <Form.Group
                  as={Col}
                  lg="6"
                  className="mb-3"
                  controlId="validationCustom04"
                >
                  <Select
                    isSearchable={false}
                    placeholder="4:00 Available"
                    options={options3}
                  />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  Please select your Time.
                </Form.Control.Feedback>

                <Form.Group as={Col} lg="12" controlId="validationCustom05">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    required
                    placeholder="Message"
                  />
                </Form.Group>
              </Row>

              <Button type="submit">Book Appointment</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
