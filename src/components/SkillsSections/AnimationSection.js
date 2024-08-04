import React from 'react';
import { Link } from 'react-router-dom';

const AnimationSection = () => {
  return (
    <section className="skill-detail">
      <Link to="/" className="back-button">Back to Home</Link>
      <h2>Animation Skills</h2>
      <ul>
        <li>2D Animation</li>
        <li>3D Animation</li>
        <li>Character Animation</li>
        <li>Motion Graphics</li>
        <li>VFX and Compositing</li>
        <li>Rigging</li>
        <li>Storyboarding</li>
        <li>Animation Software (Adobe Animate, Autodesk Maya, Blender)</li>
      </ul>
    </section>
  );
};

export default AnimationSection;