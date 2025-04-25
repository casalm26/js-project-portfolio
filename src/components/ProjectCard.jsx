import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'

// Main card container
const Card = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: ${props => props.isReversed ? '1fr 1fr' : '1fr 1fr'};
  gap: var(--space-xl);
  padding: var(--space-lg);
  position: relative;
  background: ${({ theme }) => theme.colors?.background || 'white'};
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--transition-normal);

  &:focus-within {
    outline: 3px solid ${({ theme }) => theme.colors?.primary || '#000'};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    grid-template-columns: 1fr;
    padding: var(--space-md);
    gap: var(--space-lg);
  }
`

// Image container for consistent sizing
const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  order: ${props => props.isReversed ? 2 : 1};
  border-radius: var(--radius-md);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    order: 1;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    height: 250px;
  }
`

// Project image
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-md);
  display: block;
`

// Content container
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  order: ${props => props.isReversed ? 1 : 2};
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    order: 2;
  }
`

// Tech stack container
const TechStack = styled.div`
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
`

// Project title
const ProjectTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2rem);
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors?.text || '#000'};
`

// Project description
const ProjectDescription = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  margin: 0;
`

// Links container
const ProjectLinks = styled.div`
  display: flex;
  gap: var(--space-sm);
  margin-top: auto;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    flex-direction: column;
    gap: var(--space-xs);
  }
`

export const ProjectCard = ({ project, index, total }) => {
  // Destructure project data
  const { 
    title, 
    description, 
    techStack, 
    liveDemo, 
    viewCode, 
    image, 
    imageAlt,
    isReversed 
  } = project;
  
  // Default alt text if none provided
  const defaultImageAlt = `Screenshot of ${title} project`;
  
  return (
    <Card 
      isReversed={isReversed}
      role="listitem"
      aria-labelledby={`project-title-${index}`}
      aria-posinset={index}
      aria-setsize={total}
    >
      {/* Project Image */}
      <ImageContainer isReversed={isReversed}>
        <ProjectImage 
          src={image} 
          alt={imageAlt || defaultImageAlt}
          loading="lazy"
          width="600"
          height="338"
        />
      </ImageContainer>

      {/* Project Content */}
      <ProjectContent isReversed={isReversed}>
        {/* Tech Stack */}
        <TechStack 
          role="list" 
          aria-label={`Technologies used in ${title}`}
        >
          {techStack.map((tech) => (
            <div key={tech} role="listitem">
              <Button 
                variant="tech" 
                label={tech}
                aria-label={tech}
              />
            </div>
          ))}
        </TechStack>

        {/* Project Info */}
        <ProjectTitle id={`project-title-${index}`}>
          {title}
        </ProjectTitle>
        <ProjectDescription>
          {description}
        </ProjectDescription>

        {/* Project Links */}
        <ProjectLinks>
          <Button 
            variant="external" 
            label="Live demo" 
            link={liveDemo}
            icon="globe"
            aria-label={`View live demo of ${title} project`}
          />
          <Button 
            variant="external" 
            label="View Code" 
            link={viewCode}
            icon="github"
            aria-label={`View source code for ${title} project on GitHub`}
          />
        </ProjectLinks>
      </ProjectContent>
    </Card>
  )
} 