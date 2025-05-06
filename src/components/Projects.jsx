import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import { Button } from './Buttons'
import content from '../data/content.json'

// Main section container
const ProjectsSection = styled.section`
  width: 100%;
  max-width: min(1200px, 90vw);
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    padding: var(--space-lg) var(--space-md);
  }
`

// Section title
const ProjectsTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw + 1rem, 5rem);
  margin-bottom: var(--space-xl);
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.text || '#000'};
`

// Projects container
const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    gap: var(--space-lg);
  }
`

// See more button container
const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-xl);
`

export const Projects = () => {
  // Get content from JSON
  const { title, items } = content.projects;
  
  return (
    <ProjectsSection 
      id="projects"
      aria-labelledby="projects-title"
    >
      {/* Section Title */}
      <ProjectsTitle id="projects-title">
        {title}
      </ProjectsTitle>

      {/* Projects List */}
      <ProjectsList 
        role="list"
        aria-label="List of featured projects"
      >
        {items.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index + 1}
            total={items.length}
          />
        ))}
      </ProjectsList>

      {/* See More Button */}
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