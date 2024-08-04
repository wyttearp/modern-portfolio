import React from 'react';
import { Link } from 'react-router-dom';

const VideoSection = () => {
  return (
    <section className="skill-detail">
      <Link to="/" className="back-button">Back to Home</Link>
      <h2>Video Editing Skills</h2>
      <ul>
        <li>Non-linear Editing</li>
        <li>Color Grading and Correction</li>
        <li>Audio Editing and Mixing</li>
        <li>Motion Graphics Integration</li>
        <li>Video Compositing</li>
        <li>Multicam Editing</li>
        <li>Video Compression and Encoding</li>
        <li>Editing Software (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve)</li>
      </ul>
    </section>
  );
};

export default VideoSection;