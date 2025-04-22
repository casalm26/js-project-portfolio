import React from 'react'
import { ProjectCard } from './ProjectCard'
import './componentsStyling/Projects.css'

const projectsData = [
  {
    title: "Recipe app",
    description: "I've never been interested in food. The first time I invited my friends for dinner, we had hamburgers. Easy enough, right? Well, I hadn't yet found the dark magic that makes anyone a chef — recipes. Here's my take on making a recipe app of my own!",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "#",
    viewCode: "#",
    image: "/path-to-recipe-app-image.jpg"
  },
  {
    title: "Therapist client website",
    description: "A friend of mine reached out and wanted a facelift for his business website. We agreed on a couple of fundamentals: colour scheme, tone and basic functionality. Here's the result!",
    techStack: ["HTML5", "CSS3"],
    liveDemo: "#",
    viewCode: "#",
    image: "/path-to-therapist-website-image.jpg"
  }
]

export const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveDemo={project.liveDemo}
            viewCode={project.viewCode}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
} 