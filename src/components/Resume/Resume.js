import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Developer Intern - WEB SERVICE SH, MOROCCO"
              date="July 2020 - August 2020"
              content={[
                "Development of a web application for a client using PHP, JAVASCRIPT and MySQL with the help of a CMS (wordPress).",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Web and Mobile Computing Engineering - ENSIAS, MOROCCO"
              date="2020 - Present"
              content={["Option : Web Intelligence"]}
            />
            <Resumecontent
              title="Preparatory Classes for Schools - [CPGE LAAYOUNE,CPGE MED V] MOROCCO"
              date="2017 - 2020"
              content={["Option : Mathematics and Physics"]}
            />
            <Resumecontent
              title="BAC - Moulay Rchid high school SEMARA, MOROCCO"
              date="2017"
              content={["Option : Mathematical Sciences",
                        "Mention : 'trés bien'"          
            ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
