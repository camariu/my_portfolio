import React from "react";
import { Container, } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactIcon from "../../assets/img/react-2.svg"
import htmlIcon from "../../assets/img/html-1.svg"
import cssIcon from "../../assets/img/css-3.svg"
import javascriptIcon from "../../assets/img/javascript-1.svg"
import nodeIcon from "../../assets/img/nodejs.svg"

 

export default function Skills() {
  let arry1 = [0, 1, 2];
  let arry2 = [3,4,5];
   console.log(arry1.concat(arry2)[4])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container className="container">
        <Container className="row">
          <Container className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              My web development skills include expertise in JavaScript, React, Node.js, CSS, and HTML. These skills enable me to create interactive and high-performance web applications. I can develop attractive and responsive user interfaces using HTML and CSS, implement application logic with JavaScript and React, and build backend servers with Node.js. This combination of technologies helps me deliver web products and contribute to the growth and innovation of projects in the web development field
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactIcon} alt="skill" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={javascriptIcon} alt="skill" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={nodeIcon} alt="skill" />
               
                </div>
                <div className="item">
                  <img src={cssIcon} alt="skill" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={htmlIcon} alt="skill" />
                  <h5>HTML</h5>
                </div>
              </Carousel>
            </div>
          </Container>
        </Container>
      </Container>

    </section>
  );
}
