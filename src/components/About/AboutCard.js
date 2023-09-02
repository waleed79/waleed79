import React from "react";
import Card from "react-bootstrap/Card";
import {FaCaretRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
<br /> Hello! I'm <a className="teal">Waleed Arshad</a>, a senior year undergraduate student pursuing a degree in BS. Computer Science at <a href="https://lums.edu.pk/" target="_blank" rel="noopener noreferrer" className="teal-link">LUMS</a> in Pakistan. 
I am deeply passionate about Usable Security, Human-Computer Interaction (HCI), and Information and Communication Technologies for Development (ICT4D). Throughout my academic journey, I've honed my skills in programming, user interface design, 
and research methods. I've had the opportunity to work on projects that involve enhancing the usability and security of digital applications while considering the unique challenges faced in ICT4D contexts. I'm excited to continue my journey in the world 
of Computer Science, aiming to make technology more accessible, secure, and user-friendly. Please feel free to explore my portfolio to learn more about my work and connect with me on <a href="https://www.linkedin.com/in/waleed--arshad/" target="_blank" rel="noopener noreferrer" className="teal-link">LinkedIn</a> for potential collaborations.
{/* <br /> I am a Senior Year student, pursuing a Bachelors in Computer Science from <a href="https://lums.edu.pk/" target="_blank" rel="noopener noreferrer" className="teal-link">LUMS</a>.
<br />I am based in <a href="https://www.google.com/maps?q=Lahore,Pakistan" target="_blank" rel="noopener noreferrer" className="teal-link">Lahore, Pakistan</a>.
<br /> My interests are centered around Usable Security, HCI and ICT4D. 
<br/> I am also an <a href="https://www.instagram.com/artbysaleha" target="_blank" rel="noopener noreferrer" className="teal-link">artist</a> with a love for Arabic calligraphy (Khat-e-Suls).
<br/>
<br/> */}

          </p>
          <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What am I <strong className="teal">working</strong> on ?
            </h2>
          <ul style={{ listStyleType: "disc", paddingLeft: 30 }}>
            <li className="about-activity">
            <FaCaretRight className="bullet-icon" /> <strong className="teal"> Analyzing social media in Pakistan </strong> 
            </li>
            <li className="about-activity">
            <FaCaretRight className="bullet-icon" /><strong className="teal"> Characteristics associated with a Cybersecurity Trainer </strong> 
            </li>
            <li className="about-activity">
            <FaCaretRight className="bullet-icon" /><strong className="teal"> Perception of Cybersecurity Trainers in Pakistan </strong> 
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
