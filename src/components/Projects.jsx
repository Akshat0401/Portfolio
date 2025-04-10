import React, { useState } from 'react';

const projectData = [
  {
    title: 'LeafCare',
    tech: 'HTML, CSS, JavaScript, Flask, Deep Learning',
    description: `A system to accurately identify various leaf types and detect associated diseases with 97% validation accuracy using VIT Transformer. Integrated Flask API and containerized deployment.`,
    link: 'https://github.com/Akshat0401/Leafcare_using_AI_ML',
  },
  {
    title: 'Chess AI Game',
    tech: 'Python, Pygame, AI Minimax',
    description: `A smart chess game built with Python where you can play against an AI that uses Minimax algorithm with alpha-beta pruning for smart moves.`,
    link: 'https://github.com/Akshat0401/Chess_AI_Game',
  },
  {
    title: 'Translator Web Application',
    tech: 'HTML, CSS, JavaScript, APIs',
    description: `Accurate text translation between languages using external APIs. Built with clean UI and efficient request handling.`,
    link: 'https://github.com/Akshat0401/Translator_Web_App',
  },
  {
    title: 'Expense Tracker',
    tech: 'HTML, CSS, JavaScript',
    description: `Tracks budgets, calculates expenses dynamically, and generates detailed monthly reports.`,
    link: 'https://github.com/Akshat0401/Expense_Tracker',
  },
  {
    title: 'Blog CMS Demo',
    tech: 'MERN Stack',
    description: `A full-stack blog content management system with user roles, JWT auth, markdown editor, and rich dashboard.`,
    link: 'https://demo-link.com/blog-cms',
  },
];

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const displayedProjects = showMore ? projectData : projectData.slice(0, 4);

  return (
    <div id="projects" className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center">
      <span className="text-4xl font-bold">My Projects</span>
      <p className="mt-4 text-lg text-gray-300 max-w-[800px] mx-auto">
      Here are some of the projects I've worked on that reflect my skills in full-stack development, artificial intelligence, and creative problem solving. From building real-time web apps to integrating deep learning models, each project showcases a different aspect of my technical journey. Whether it's crafting clean UI/UX, writing scalable backend APIs, or implementing smart algorithms, I love turning ideas into functional and impactful solutions.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="w-full bg-[#2a2a2a]/60 backdrop-blur-md border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-2xl p-8 shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left"
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">{project.title}</h2>
            <p className="text-sm text-gray-400 italic mb-2">Tech: {project.tech}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              GitHub - {project.title}
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-10 bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
      >
        {showMore ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}

export default Projects;
