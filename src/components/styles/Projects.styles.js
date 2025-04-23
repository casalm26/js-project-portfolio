import styled from 'styled-components'

export const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

export const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`

export const ProjectCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

export const ProjectContent = styled.div`
  padding: 1.5rem;
`

export const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
` 