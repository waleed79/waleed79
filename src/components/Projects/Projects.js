import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import haqbaat from "../../Assets/Projects/haqbaat.jpeg";
import birthday from "../../Assets/Projects/birthday.png";
import apnacomp from "../../Assets/Projects/apnacomp.png";
import house from "../../Assets/Projects/house.jpg";
import raftaar from "../../Assets/Projects/raftaar.png";
import meme from "../../Assets/Projects/meme.png";
import p1 from "../../Assets/Projects/p1.webp";
import p2 from "../../Assets/Projects/p2.png";
import p3 from "../../Assets/Projects/p3.png";
import p4 from "../../Assets/Projects/p4.jpg";
import p5 from "../../Assets/Projects/p5.png";
import p6 from "../../Assets/Projects/p6.jpg";
import p7 from "../../Assets/Projects/p7.png";
import p8 from "../../Assets/Projects/p8.jpg";
import p9 from "../../Assets/Projects/p9.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="teal">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are some of the projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title=<strong className="teal">PRIVACY AND DIGITAL SAFETY OF CREATORS IN PAKISTAN </strong>
              description="Conducted qualitative research on the digital safety of content creators in
Pakistan in collaboration with CISPA Institute. Our main goal is to provide
better resources to digital content creators in Pakistan for their safety."
              ghLink=""            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title=<strong className="teal">PROJECT IMDAAD</strong>
              description="As part of HCI project, conducted user-research, and designed a user
              interface to help with Emergency Relief efforts. Project Imdaad would
              help connect NGOs and donors to assist emergency relief efforts."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p9}
              isBlog={false}
              title=<strong className="teal">Taawun</strong>
              description="Building upon the foundation laid by Project Imdaad, we embarked on the development of Taawun as part of a Software Engineering course. Taawun represents the next phase in our commitment to enhancing emergency relief efforts. In collaboration with my team, we designed and implemented a web portal tailored to the needs of NGOs and donors, streamlining their collaboration and support mechanisms. NGOs gained the ability to seamlessly collaborate, coordinate, and access essential resources, while donors found a user-friendly platform to contribute and track their assistance. It is a testament to our dedication to bridging the gap between humanitarian organizations and donors, ultimately working toward more efficient and effective emergency relief efforts."
              ghLink="https://github.com/shahmeerify/Taawun"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title=<strong className="teal">CHAT SERVER - NETWORKING</strong>
              description="Made a chat application using socket programming in Python.
Implemented both unreliable and reliable transport using UDP and
TCP. The program catered to multi-user using network threading."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4}
              isBlog={false}
              title=<strong className="teal">CERN BEAMLINE FOR SCHOOL (BL4S)</strong>
              description="Analyzed Bremsstrahlung radiation and how that could help to distinguish
matter/antimatter. Top 20 teams out of 178 teams and 49 countries"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5}
              isBlog={false}
              title=<strong className="teal">LIBRARY MANAGEMENT SYSTEM</strong>
              description="Made front-end and back-end for the database course project. Used react for
frontend and node js for backend, and used SQL for database"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p6}
              isBlog={false}
              title=<strong className="teal">FINDING THE BLUE SKIES: ANALYZING LAHORE’S AIR QUALITY </strong>
              description="Air pollution has become a significant health hazard in the city of Lahore. I
analyzed the data from the US consulate, Environment Protection
Department (EPD) Punjab, and crowd-sourced using MATLAB."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p7}
              isBlog={false}
              title=<strong className="teal">Flight Reservation System </strong>
              description="For my initial C++ project, I developed a user-friendly Flight Reservation System that empowers users to effortlessly manage their flight bookings. This system simplifies the reservation process, allowing users to browse available flights, reserve seats, and make adjustments to their bookings as needed. The project honed my programming skills and my ability to create practical solutions that enhance user experiences in real-world scenarios."
              ghLink="https://github.com/waleed79/Flight-Reservation-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p8}
              isBlog={false}
              title=<strong className="teal">BIEA Youth Innovation Competition </strong>
              description="I had the privilege of participating in the BIEA Youth Innovation Competition's drone competition. Our project had a noble mission: to protect the endangered Markhor, Pakistan's national animal, using innovative drone technology. Through countless hours of research, design, and collaboration, our team developed a specialized drone capable of monitoring and safeguarding the habitat of these magnificent creatures. I'm proud to say that our dedication and innovative approach led us to secure the Best Team award in the competition. This experience not only deepened my passion for technology and conservation but also underscored the impact that creative engineering solutions can have on addressing real-world challenges."
              ghLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
