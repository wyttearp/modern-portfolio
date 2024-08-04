import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const skills = [
    { name: 'Design', icon: '🎨', link: '/skills/design' },
    { name: 'Development', icon: '💻', link: '/skills/development' },
    { name: 'Animation', icon: '🎬', link: '/skills/animation' },
    { name: 'Video Editing', icon: '🎥', link: '/skills/video' },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Link to={skill.link} key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Skills;