import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import { Button } from './Buttons'

const ProjectsSection = styled.section`
  padding: var(--space-xl) var(--space-lg);
  max-width: min(1200px, 90vw);
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    padding: var(--space-lg) var(--space-md);
  }
`

const ProjectsTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw + 1rem, 5rem);
  margin-bottom: var(--space-xl);
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.text || '#000'};
`

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    gap: var(--space-lg);
  }
`

const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-xl);
`

const projectsData = [
  {
    id: 'recipe-app',
    title: "Recipe app",
    description: "I've never been interested in food. The first time I invited my friends for dinner, we had hamburgers. Easy enough, right? Well, I hadn't yet found the dark magic that makes anyone a chef — recipes. Here's my take on making a recipe app of my own!",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://recipe-app-demo.netlify.app",
    viewCode: "https://github.com/yourusername/recipe-app",
    image: "/assets/recipe-website.svg",
    imageAlt: "Screenshot of the Recipe App showing a clean, modern interface with recipe cards and search functionality",
    isReversed: false
  },
  {
    id: 'therapist-website',
    title: "Therapist client website",
    description: "A friend of mine reached out and wanted a facelift for his business website. We agreed on a couple of fundamentals: colour scheme, tone and basic functionality. Here's the result!",
    techStack: ["HTML5", "CSS3"],
    liveDemo: "https://therapist-website-demo.netlify.app",
    viewCode: "https://github.com/yourusername/therapist-website",
    image: "/assets/therapy-website.svg",
    imageAlt: "Screenshot of the Therapist Website featuring a professional and calming design with appointment booking functionality",
    isReversed: true
  }
]

export const Projects = () => {
  return (
    <ProjectsSection 
      id="projects"
      aria-labelledby="projects-title"
    >
      <ProjectsTitle id="projects-title">Featured Projects</ProjectsTitle>
      <ProjectsGrid 
        role="list"
        aria-label="List of featured projects"
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index + 1}
            total={projectsData.length}
          />
        ))}
      </ProjectsGrid>
      <SeeMoreContainer>
        <Button 
          variant="outline" 
          label="See more projects"
          icon="arrow-down"
          aria-label="View additional projects"
        />
      </SeeMoreContainer>
    </ProjectsSection>
  )
} 