import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import colorSharp2 from "../../../assets/img/color-sharp2.png";
import projImg1 from "../../../assets/img/filmoteka.png";
import projImg2 from "../../../assets/img/ice-cream-team.png";
import projImg3 from "../../../assets/img/find-imge-react.png";
import projImg4 from "../../../assets/img/feedback-react.png";
import projImg5 from "../../../assets/img/search-image-JS.png";
import projImg6 from "../../../assets/img/Applications.png";


export default function Projects() {
  const projects = [
    {
      title: "Filmoteka",
      description: "JavaScript & HTML & CSS ",
      description2: "Team_project",
      imgUrl: projImg1,
      link: "https://camariu.github.io/goit-markup-hw-08/"
      
    },
    {
      title: "Ice-Cream",
      description: "HMTL & CSS",
      description2: "Team_project",
      imgUrl: projImg2,
      link: "https://andreeasichitiu.github.io/team-6-ice-project/"
     
    },
    {
      title: "Find Image",
      description: "React.js",
      imgUrl: projImg3,
      link: "https://camariu.github.io/goit-react-hw-04-images/"

    },
    {
      title: "Feedback",
      description: "React.js",
      imgUrl: projImg4,
      link: "https://camariu.github.io/goit-react-hw-02-feedback/"
    },
    {
      title: "Search Image",
      description: "JavaScript & HTML & CSS",
      imgUrl: projImg5,
      link: "https://camariu.github.io/goit-js-hw-11/"
    },
    {
      title: "Applications JavaScript",
      description: "JavaScript",
      imgUrl: projImg6,
      link: "https://camariu.github.io/goit-js-hw-06/index.html"
    
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            This portfolio of projects represents a diverse collection of web applications developed using technologies such as React.js, JavaScript, HTML, and CSS. Each project has been created to demonstrate the   skills and knowledge in building interactive and scalable web applications.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content >
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <p>Lorem ipsum</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum</p>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Content >
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <p>Lorem ipsum</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
}
