import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/CV.pdf'
import pdf_en from '../../Assets/BAIBA_Mohamed_EN.pdf'
import pdf_fr from '../../Assets/BAIBA_Mohamed_FR.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

function Resume() {
  return (
    <Container
      fluid
      className="resume-section"
    >
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf_en}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV English
          </Button>
        </Row>

        <Row className="resume">
          <Col
            md={6}
            className="resume-left"
          >
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer at SOSIPO, MOROCCO"
              date="April 2024 - July 2024"
              content={[
                'Software engineer in the information systems department, responsible for the proper functioning of a business application called VLMS. VLMS is in charge of the management andadministration of the Sosipo terminal in Morocco',
              ]}
            />
            <Resumecontent
              title="PFE internship at Oracle Research and Development, MOROCCO"
              date="March 2023 - September 2023"
              content={[
                'Member of Oracle Graph team, which focuses on implementing graph technologies into the Oracle database. Specifically, I have been integrated into a team that focuses on developing a Java API for executing the PGQL language withinthe Oracle database.',
              ]}
            />
            <Resumecontent
              title="PFA internship at DiaaLand, MOROCCO"
              date="July 2022 - September 2022"
              content={[
                'Development of a social media web application using Springboot, React, Microservice Architecture, Mysql, Cassandra, Mongodb, Neo4j, Docker and Git. ',
              ]}
            />
            <Resumecontent
              title="PFA internship at WEB SERVICE SH, MOROCCO"
              date="July 2021 - September 2021"
              content={[
                'Development of a web application for a client using Php,JavaScript and MySQL with the help of a CMS (WordPress).',
              ]}
            />
          </Col>
          <Col
            md={6}
            className="resume-right"
          >
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="National school For Computer Science (ENSIAS)"
              date="In Rabat, 2020 - 2023"
              content={[
                'State engineering degree in computer engineering, option Web Engineering and Mobile Computing.',
              ]}
            />
            <Resumecontent
              title="Preparatory Classes for Grandes Ecoles (CPGE)"
              date="In Laâyoune, 2017 - 2018, in Casa 2018 - 2020"
              content={[
                'Certificate of Access to Engineering Schools, Mathematics and Physics Option (MP).',
              ]}
            />
            <Resumecontent
              title="Baccalaureate"
              date="In Es-Semara, 2017"
              content={[
                'Baccalaureate in mathematical sciences A at Molay Rchid highschool, Mention Very Good.',
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf_fr}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV Frensh
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume
