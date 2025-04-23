import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'

const Card = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: ${props => props.isReversed ? '1fr 1fr' : '1fr 1fr'};
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    gap: 2rem;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  order: ${props => props.isReversed ? 2 : 1};

  @media (max-width: 768px) {
    order: 1;
    height: 250px;
  }
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  order: ${props => props.isReversed ? 1 : 2};
  justify-content: center;

  @media (max-width: 768px) {
    order: 2;
  }
`

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #000;
`

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
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