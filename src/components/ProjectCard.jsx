import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'

const Card = styled.article`
  background: ${({ theme }) => theme.colors?.background || 'white'};
  border-radius: var(--radius-lg);
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: ${props => props.isReversed ? '1fr 1fr' : '1fr 1fr'};
  gap: var(--space-xl);
  padding: var(--space-lg);
  transition: transform var(--transition-normal);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    grid-template-columns: 1fr;
    padding: var(--space-md);
    gap: var(--space-lg);
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-md);
  order: ${props => props.isReversed ? 2 : 1};
  aspect-ratio: 16/9;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    order: 1;
    height: auto;
  }
`

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

const TechStack = styled.div`
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
`

const ProjectTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2rem);
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors?.text || '#000'};
`

const ProjectDescription = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  margin: 0;
`

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

export const ProjectCard = ({ title, description, techStack, liveDemo, viewCode, image, isReversed }) => {
  return (
    <Card isReversed={isReversed}>
      <ProjectImage src={image} alt={title} isReversed={isReversed} />
      <ProjectContent isReversed={isReversed}>
        <TechStack>
          {techStack.map((tech, index) => (
            <Button key={index} variant="tech" label={tech} />
          ))}
        </TechStack>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLinks>
          <Button 
            variant="external" 
            label="Live demo" 
            link={liveDemo}
            icon="globe"
          />
          <Button 
            variant="external" 
            label="View Code" 
            link={viewCode}
            icon="github"
          />
        </ProjectLinks>
      </ProjectContent>
    </Card>
  )
} 