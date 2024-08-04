import React from 'react';

const ProjectGrid = () => {
  const projects = [
    { title: 'Project 1', description: 'Short description of Project 1' },
    { title: 'Project 2', description: 'Short description of Project 2' },
    { title: 'Project 3', description: 'Short description of Project 3' },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-image">
            {/* Add project image here */}
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
      
      {/* New button for Displacement.html */}
      <div className="special-project">
        <h3>Displacement Project</h3>
        <p>Check out my special Displacement project.</p>
        <a href="./Displacement.html" className="special-project-button" target="_blank" rel="noopener noreferrer">
  View Displacement Project
</a>
      </div>
    </section>
  );
};

export default ProjectGrid;