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
              title="PFE internship at Oracle Research and Development, MOROCCO"
              date="March 2023 - present"
              content={[
                "Member of Oracle Graph team, which focuses on implementing graph technologies into the Oracle database. Specifically, I have been integrated into a team that focuses on developing a Java API for executing the PGQL language withinthe Oracle database.",
              ]}
            />
            <Resumecontent
              title="PFA internship at DiaaLand, MOROCCO"
              date="July 2022 - September 2022"
              content={[
                "Development of a social media web application using springboot, react, microservice architecture, mysql, cassandra,mongodb, neo4j, docker and Git. ",
              ]}
            />
            <Resumecontent
              title="PFA internship at WEB SERVICE SH, MOROCCO"
              date="July 2021 - September 2021"
              content={[
                "Development of a web application for a client using PHP,JAVASCRIPT and MySQL with the help of a CMS (wordPress).",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="National school For Computer Science (ENSIAS)"
              date="In Rabat, 2020 - 2023"
              content={["State engineering degree in computer engineering, option Web Engineering and Mobile Computing.",]}
            />
            <Resumecontent
              title="Preparatory Classes for Grandes Ecoles (CPGE)"
              date="In Laâyoune, 2017 - 2018, in Casa 2018 - 2020"
              content={["Certificate of Access to Engineering Schools, Mathematics and Physics Option (MP).",]}
            />
            <Resumecontent
              title="Baccalaureate"
              date="In Es-Semara, 2017"
              content={["Baccalaureate in mathematical sciences A at Molay Rchid highschool, Mention Very Good.",]          
            }
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
