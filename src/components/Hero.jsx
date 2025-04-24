import React from 'react'
import styled from 'styled-components'
import content from '../data/content.json'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-lg);
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors?.background || 'white'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    padding: var(--space-md);
  }
`

const HeroContent = styled.div`
  max-width: min(800px, 90vw);
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-xs);
  font-weight: normal;
  color: ${({ theme }) => theme.colors?.text || '#333'};
`

const HeroName = styled.span`
  display: block;
  font-size: clamp(2.5rem, 5vw + 1rem, 5rem);
  margin-bottom: var(--space-sm);
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.text || '#333'};
`

const HeroSubtitle = styled.h2`
  font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
  margin-bottom: var(--space-md);
  font-weight: normal;
  color: ${({ theme }) => theme.colors?.text || '#333'};
`

const HeroText = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.6;
  max-width: min(600px, 90vw);
  margin: 0 auto var(--space-lg) auto;
  color: ${({ theme }) => theme.colors?.text || '#333'};
`

const HeroImages = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 300px;
  margin: var(--space-lg) auto;
  padding: 0 var(--space-xl);
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    height: 250px;
    padding: 0 var(--space-lg);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    height: 200px;
    padding: 0 var(--space-md);
  }

  @media (max-width: 360px) {
    height: 150px;
    padding: 0 var(--space-sm);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 3px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    width: clamp(160px, 25vw, 250px);
    height: clamp(160px, 25vw, 250px);
    transform: ${props => {
      if (props.position === 'left') return 'translateX(-60%) rotate(-5deg)';
      if (props.position === 'right') return 'translateX(60%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    width: clamp(120px, 20vw, 200px);
    height: clamp(120px, 20vw, 200px);
    transform: ${props => {
      if (props.position === 'left') return 'translateX(-50%) rotate(-5deg)';
      if (props.position === 'right') return 'translateX(50%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
  }

  @media (max-width: 360px) {
    width: clamp(90px, 18vw, 120px);
    height: clamp(90px, 18vw, 120px);
    transform: ${props => {
      if (props.position === 'left') return 'translateX(-40%) rotate(-5deg)';
      if (props.position === 'right') return 'translateX(40%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
  }
`

const ImageCard = styled('figure')`
  position: absolute;
  width: clamp(200px, 30vw, 300px);
  height: clamp(200px, 30vw, 300px);
  margin: 0;
  transform: ${({ $position }) => {
    if ($position === 'left') return 'translateX(-70%) rotate(-5deg)';
    if ($position === 'right') return 'translateX(70%) rotate(5deg)';
    return 'translateY(0) rotate(0deg)';
  }};
  z-index: ${({ $position }) => {
    if ($position === 'center') return 3;
    if ($position === 'left') return 2;
    return 1;
  }};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-md);
    filter: grayscale(100%);
    transition: filter var(--transition-normal);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    width: clamp(160px, 25vw, 250px);
    height: clamp(160px, 25vw, 250px);
    transform: ${({ $position }) => {
      if ($position === 'left') return 'translateX(-60%) rotate(-5deg)';
      if ($position === 'right') return 'translateX(60%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    width: clamp(120px, 20vw, 200px);
    height: clamp(120px, 20vw, 200px);
    transform: ${({ $position }) => {
      if ($position === 'left') return 'translateX(-50%) rotate(-5deg)';
      if ($position === 'right') return 'translateX(50%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
  }

  @media (max-width: 360px) {
    width: clamp(90px, 18vw, 120px);
    height: clamp(90px, 18vw, 120px);
    transform: ${({ $position }) => {
      if ($position === 'left') return 'translateX(-40%) rotate(-5deg)';
      if ($position === 'right') return 'translateX(40%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
  }
`

const DownArrow = styled.button`
  margin-top: var(--space-lg);
  background: none;
  border: none;
  padding: var(--space-sm);
  cursor: pointer;
  animation: bounce 2s infinite;
  
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Hero = () => {
  const { greeting, name, title, description, images } = content.hero;
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection 
      aria-labelledby="hero-title"
      role="banner"
    >
      <HeroContent>
        <HeroTitle id="hero-title">
          {greeting}
          <HeroName>{name}</HeroName>
        </HeroTitle>
        <HeroSubtitle>{title}</HeroSubtitle>
        <HeroText>{description}</HeroText>
      </HeroContent>
      <HeroImages role="presentation">
        {images.map((image) => (
          <ImageCard key={image.position} $position={image.position}>
            <img 
              src={image.src} 
              alt={image.alt} 
              loading="lazy" 
            />
          </ImageCard>
        ))}
      </HeroImages>
      <DownArrow
        onClick={scrollToProjects}
        aria-label="Scroll to projects section"
        type="button"
      >
        <img 
          src="/assets/Caspian Arrow.svg" 
          alt="" 
          aria-hidden="true"
          width="28"
          height="69"
        />
      </DownArrow>
    </HeroSection>
  )
}