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
  margin-bottom: var(--space-xl);

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    gap: var(--space-lg);
  }
`

const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-lg);
`

const projectsData = [
  {
    title: "Recipe app",
    description: "I've never been interested in food. The first time I invited my friends for dinner, we had hamburgers. Easy enough, right? Well, I hadn't yet found the dark magic that makes anyone a chef — recipes. Here's my take on making a recipe app of my own!",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://recipe-app-demo.netlify.app",
    viewCode: "https://github.com/yourusername/recipe-app",
    image: "/assets/recipe-website.svg"
  },
  {
    title: "Therapist client website",
    description: "A friend of mine reached out and wanted a facelift for his business website. We agreed on a couple of fundamentals: colour scheme, tone and basic functionality. Here's the result!",
    techStack: ["HTML5", "CSS3"],
    liveDemo: "https://therapist-website-demo.netlify.app",
    viewCode: "https://github.com/yourusername/therapist-website",
    image: "/assets/therapy-website.svg"
  }
]

export const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
            isReversed={index % 2 !== 0}
          />
        ))}
      </ProjectsGrid>
      <SeeMoreContainer>
        <Button 
          variant="outline" 
          label="See more projects" 
          icon="arrow-right"
        />
      </SeeMoreContainer>
    </ProjectsSection>
  )
} 