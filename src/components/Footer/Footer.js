import React from "react";
import { Container, Col, Row } from "react-bootstrap";
 
import logo from "../../assets/img/Screenshot_5.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
 
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
            <a href="https://www.linkedin.com/in/costel-amariutei-573a2a232/" target="_blank" rel="noreferrer">
                  <img src={navIcon1} alt="navbar"></img>
                </a>
                <a href="https://github.com/camariu" target="_blank" rel="noreferrer">
                  <img src={navIcon3} alt="navbar"></img>
                </a>
        
            </div>
            <p>CopyRight 2023. All Right Reservet by Costel Amariutei</p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right"  alt="footer-background" src={colorSharp}></img>
    </footer>
  );
}
