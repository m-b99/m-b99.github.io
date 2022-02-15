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
              title="Full Stack Developer Intern - INTELLCAP, MOROCCO"
              date="July 2021 - August 2021"
              content={[
                "Contribution to the development of a media platform: Web version (React.js & Node.js & Firebase) and Mobile version (React native & Firebase).",
              ]}
            />
            <Resumecontent
              title="Web Developer Intern - ONEE, MOROCCO"
              date="July 2020 - August 2020"
              content={[
                "Development of an web application 'ONEP SERVICES' for employee management (PHP, JAVASCRIPT & MySQL).",
              ]}
            />
            <h3 className="resume-title">Certificates</h3>
            <Resumecontent
              title=""
              content={[
                "Become a Machine Learning Engineer - Educative",
                "L'essentiel de JavaScript - LinkedIn Learning ",
                "L'essentiel de React.js - LinkedIn Learning",
                "Java for Android - Coursera",
                "Développez sites web avec Java EE - OpenClassrooms",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Web and Mobile Computing Engineering - ENSIAS, MOROCCO"
              date="2019 - Present"
              content={["Option : Web Intelligence"]}
            />
            <Resumecontent
              title="Preparatory Classes for Schools - CPGE LAAYOUNE, MOROCCO"
              date="2017 - 2019"
              content={["Option : Mathematics and Physics"]}
            />
            <Resumecontent
              title="BAC - BAB SAHRA high school GUELMIM, MOROCCO"
              date="2017"
              content={["Option : Mathematical Sciences"]}
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
