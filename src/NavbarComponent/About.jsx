// import React from 'react';
// import '../static/About.css';
// import computer from "../images/computer.png";
// import target from "../images/target.png";
// import confued from "../images/confused.png";

import React from "react";
import '../css/AboutUs.css';

const teamMembers = [
  { name: "John Doe", image: "john.jpg", role: "Backend Developer" },
  { name: "Jane Smith", image: "jane.jpg", role: "Frontend Developer" },
  { name: "Michael Brown", image: "michael.jpg", role: "UI/UX Designer" },
  { name: "Emily Davis", image: "emily.jpg", role: "Project Manager" },
  { name: "David Wilson", image: "david.jpg", role: "Database Administrator" },
];

const About = () => {
  return (
    <div className="about-container">
      <h1>About CaptureCrew</h1>
      <p>
        CaptureCrew is an online photographer booking system designed to connect
        talented photographers with customers looking for high-quality
        photography services. Our goal is to make the process of finding and
        booking a photographer seamless and hassle-free.
      </p>
      <p>
        Our platform offers a wide range of services, including event photography,
        portrait sessions, commercial shoots, and much more. With an easy-to-use
        interface and a variety of professional photographers to choose from,
        CaptureCrew ensures a premium experience for both photographers and clients.
      </p>
      <h2>Why Choose CaptureCrew?</h2>
      <ul>
        <li>Wide selection of skilled photographers</li>
        <li>Easy and secure booking process</li>
        <li>Transparent pricing and reviews</li>
        <li>Flexible scheduling options</li>
        <li>Customer support available 24/7</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        At CaptureCrew, our mission is to bridge the gap between photographers and clients
        by providing a seamless, user-friendly platform that ensures quality, professionalism,
        and ease of access. We believe in empowering photographers by giving them an opportunity
        to showcase their work and grow their business while making it easier for clients to find
        the perfect photographer for their needs.
      </p>
      <h2>Contact Us</h2>
      <p>
        Have questions or need support? Feel free to reach out to us at:
      </p>
      <p>Email: support@capturecrew.com</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Follow us on social media for the latest updates and promotions!</p>
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
