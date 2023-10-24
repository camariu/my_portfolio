import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../../assets/img/Screenshot_5.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
 
import navIcon3 from "../../assets/img/github-mark-white.svg";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScrool = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScrool);
    return () => window.removeEventListener("scroll", onScrool);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
         <div className="logo-img">
            <img src={logo} alt="Logo"   className="logo-img-pos" ></img>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toogle-icon toogle-button" >Menu</span>
         
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
             
            </Nav>
            <p className="connect">
                Let's Connect
                </p>
            <div className="nav-bar-text">
             
              <div className="social-icon">
             
                <a href="https://www.linkedin.com/in/costel-amariutei-573a2a232/" target="_blank" rel="noreferrer">
                  <img src={navIcon1} alt="navbar"></img>
                </a>
                <a href="https://github.com/camariu" target="_blank" rel="noreferrer">
                  <img src={navIcon3} alt="navbar"></img>
                </a>
              </div>
              
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
