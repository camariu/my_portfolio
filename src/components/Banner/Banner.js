import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";

import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
 

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["React.js", "JavaScript", "CSS", "HTML5"];
  const [text, setText] = useState("");
  const period = 450;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {( {isVisible}) =>
            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
            <span className="tagline welcome">Welcome to my Portofolio </span>
            <h1>
              {`Hi, I'm your Frontend Developer `}
              <br></br>
              {``}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              As a beginner developer, I'm passionate about coding and excited
              to embrace challenges. I see learning as a lifelong journey, and
              I'm dedicated to growing in the ever-evolving world of technology
            </p>
            <a href="#footer" className="directing-footer">
            <button >
              Let's connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
            </a>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={headerImg} alt="Headder"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
