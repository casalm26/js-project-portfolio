import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`

const Card = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

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

const ProjectCard = ({ title, description, techStack, liveDemo, viewCode, image }) => {
  return (
    <Card>
      <ProjectImage src={image} alt={title} />
      <ProjectContent>
        <TechStack>
          {techStack.map((tech, index) => (
            <Button key={index} variant="tech" label={tech} />
          ))}
        </TechStack>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLinks>
          <Button variant="external" label="Live demo" link={liveDemo} />
          <Button variant="external" label="View Code" link={viewCode} />
        </ProjectLinks>
      </ProjectContent>
    </Card>
  )
}

export const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsGrid>
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
      </ProjectsGrid>
    </ProjectsSection>
  )
} 