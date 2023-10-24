import React from 'react';
import { Col } from 'react-bootstrap';

export default function ProjectCard({ title, description, imgUrl, link, description2 }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="card"></img>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span>{description2}</span>
           <a href={link} target="_blank" rel="noreferrer">
            <button>Go to project</button>
          </a>
        </div>
      </div>
    </Col>
  );
}
