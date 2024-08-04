import React from 'react';
import { Link } from 'react-router-dom';

const DevelopmentSection = () => {
  return (
    <section className="skill-detail">
      <Link to="/" className="back-button">Back to Home</Link>
      <h2>Development Skills</h2>
      <ul>
        <li>Front-end Development (HTML, CSS, JavaScript)</li>
        <li>React.js and React Native</li>
        <li>Node.js and Express.js</li>
        <li>RESTful API Development</li>
        <li>Database Management (SQL and NoSQL)</li>
        <li>Version Control (Git)</li>
        <li>Responsive Web Design</li>
        <li>Progressive Web Apps (PWA)</li>
      </ul>
    </section>
  );
};

export default DevelopmentSection;