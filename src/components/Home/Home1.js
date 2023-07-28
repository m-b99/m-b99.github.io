
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./DSC_0002_.jpg";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import Type from "./Type";

function Home1() {
  return (
    <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Row>
            <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
            </h1>

            <h1 className="heading-name">
                I'M
                <strong className="main-name"> BAIBA MOHAMED</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
            </div>
            </Col>
            <Col md={5} >  
            <Tilt>
                <img src={homeLogo} alt="avatar" className="img-fluid" />
            </Tilt>
            </Col>
        </Row>
        </Container>
    </Container>
  );
}
export default Home1;