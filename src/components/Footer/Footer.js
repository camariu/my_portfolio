import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MailChimpForm from "../MailChimpForm/MailChimpForm";
import logo from "../../assets/img/Screenshot_5.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import colorSharp from "../../assets/img/color-sharp.png"

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-item-center footer-block">
          <Col sn={6} className="footer-log">
            <img src={logo} alt="logo"></img>
          </Col>
          <Col sm={6} className="text-center text-sm-end  ">
            <div className="social-icon footer-social ">
              <a href="">
                <img src={navIcon1}></img>
              </a>
              <a href="">
                <img src={navIcon2}></img>
              </a>
              <a href="">
                <img src={navIcon3}></img>
              </a>
            </div>
            <p>CopyRight 2023. All Right Reservet by Costel Amariutei</p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp}></img>
    </footer>
  );
}
