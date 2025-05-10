import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>Alumni Reconnect Database</h3>
        <p>
          Platform connecting MIT Muzaffarpur alumni and students. Facilitates mentorship, 
          career opportunities, and networking with real-time updates and AI-driven guidance.
          Launching in May 2025.
        </p>
      </div>

      <div className="project">
        <h3>Poke Explorer</h3>
        <p>
          A React app to explore Pokémon data. Fetches and filters Pokémon data from PokeAPI 
          and displays them in an interactive, user-friendly interface.
        </p>
      </div>
    </section>
  );
};

export default Projects;
