import { useState } from "react";
import React from "react";
import $ from "jquery";
import "./NavbarMenu.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { Icon } from "@iconify/react";
import Select from "react-select";

function NavbarMenu() {
  // Navbar top fixed scroll animation jquery
  $(document).ready(function () {
    var navbar = $(".navbar");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        navbar.addClass("navbar-fixed");
      } else {
        navbar.removeClass("navbar-fixed");
      }
    });
  });
  // Navbar top fixed scroll animation jquery

  // nav-menu search-bar

  $(document).ready(function () {
    $(".searchIco").click(function () {
      $(this).css("display", "none");
      $(".closeIco").css("display", "block");
      $("#wrap input")
        .addClass("active")
        .animate({ width: "250px", border: "1px solid #bdbdbd" }, "fast");
    });
  });
  $(document).on("click", ".closeIco", function () {
    $(".searchIco").css("display", "block");
    $(".closeIco").css("display", "none");
    $("#wrap input").removeClass("active").animate({ width: "0px" }, "fast");

    $("#wrap input").blur();
  });

  // nav-menu search-bar

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

  const options = [
    { value: "Item-1", label: "Item-1" },
    { value: "Item-2", label: "Item-2" },
    { value: "Item-3", label: "Item-3" },
  ];

  const options1 = [
    { value: "4:00 Available", label: "4:00 Available" },
    { value: "6:00 Available", label: "6:00 Available" },
    { value: "8:00 Available", label: "8:00 Available" },
  ];

  // Dropdown  menu

  return (
    <div id="home" className="header">
      <Navbar expand="lg" className="Top-menu ">
        <Container>
          <Navbar.Brand href="home">Sprivaten</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Icon icon="bx:menu-alt-right" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-link">
              <Nav.Link href="#WhyUs">Why Us</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#Testmonials">Testimonials</Nav.Link>
              <Nav.Link href="#OurTeam">Our Team</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div id="wrap" className="navbar-fixed-top">
            <button className="searchBar">
              <Icon className="searchIco" icon="octicon:search-16"></Icon>
            </button>
            <Icon className="closeIco" icon="iconamoon:close-duotone"></Icon>

            <input
              id="search"
              name="search"
              type="text"
              placeholder="search here"
            />
          </div>
        </Container>
      </Navbar>

      <div className="hero">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              lg={6}
              md={12}
              sm={12}
              className="text-center text-lg-start mb-5"
            >
              <h1>Drive More Customers Through Digital</h1>
              <p>
                We know how large objects will act, but things on a small scale.
              </p>
              <Button className="btn-1">Get Qoute Now</Button>
              <Button className="btn-2">
                <a href="#learnmore">Learn More</a>
              </Button>
            </Col>
            <Col lg={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h3 className="text-center">Book Appointment</h3>
                <Form.Group className="mb-2" controlId="name">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="email">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="example@gmail.com"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your Email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2" controlId="department">
                  <div className="label">Department*</div>

                  <Form.Group
                    as={Col}
                    lg="12"
                    className="mb-2"
                    controlId="validationCustom03"
                  >
                    <Select
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused ? "#bdbdbd" : "#bdbdbd",
                        }),
                      }}
                      isSearchable={false}
                      placeholder="Please Select"
                      options={options}
                    />
                  </Form.Group>
                  <Form.Control.Feedback type="invalid">
                    Please select your Department.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2" controlId="time">
                  <div className="label">Time*</div>
                  <Form.Group
                    as={Col}
                    lg="12"
                    className="mb-2"
                    controlId="validationCustom04"
                  >
                    <Select
                      isSearchable={false}
                      placeholder="4:00 Available"
                      options={options1}
                    />
                  </Form.Group>
                  <Form.Control.Feedback type="invalid">
                    Please select your Time.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="hero-form-btn" type="submit">
                  Book Appointment
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default NavbarMenu;
