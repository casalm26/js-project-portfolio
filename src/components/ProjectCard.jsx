import React from 'react'
import { Button } from './Buttons'

export const ProjectCard = ({ title, description, techStack, liveDemo, viewCode, image }) => {
  return (
    <article className="project-card">
      <img src={image} alt={title} className="project-image" />
      
      <div className="project-content">
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <Button key={index} variant="tech" label={tech} />
          ))}
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-links">
          <Button 
            variant="external" 
            label="Live demo" 
            link={liveDemo} 
          />
          <Button 
            variant="external" 
            label="View Code" 
            link={viewCode} 
          />
        </div>
      </div>
    </article>
  )
} 