import React from 'react';
import { Link } from 'react-router-dom';

const DesignSection = () => {
  return (
    <section className="skill-detail">
      <Link to="/" className="back-button">Back to Home</Link>
      <h2>Design Skills</h2>
      <ul>
        <li>UI/UX Design</li>
        <li>Graphic Design</li>
        <li>Branding</li>
      </ul>
    </section>
  );
};

export default DesignSection;