// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer text-center p-3">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h5>Company</h5>
            <p>About Us</p>
            <p> Contact Us</p>
            <p>Reservation</p>
            <p> Privacy policy</p>
            <p> Terms & Conditions</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Contact</h5>
            <p>123 street,New Delhi,India</p>
            <p>+91 9876543210</p>
            <p>tasteofsplendour@org.in</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Opening</h5>
            <p>Monday-Saterday</p>
            <p>9AM-10PM</p>
            <p>Sunday</p>
            <p>10AM-8PM</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Newsletter</h5>
            <p>To get news about our services please give your email</p>
            <input type="email" placeholder="123@gmail.com" />
            <button>sigh up</button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
