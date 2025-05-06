import styled from 'styled-components'
import content from '../data/content.json'

// Section wrapper
const HeroSection = styled.section`
  min-height: 100vh;
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors?.background || 'white'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    padding: var(--space-md);
  }
`

// Text content wrapper
const HeroContent = styled.div`
  max-width: min(800px, 90vw);
  margin: 0 auto;
`

// Typography components
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

// Images section
const HeroImages = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 300px;
  margin: var(--space-lg) auto;
  padding: 0 var(--space-xl);
  display: flex;
  justify-content: center;
  
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
`

const ImageCard = styled('figure')`
  position: absolute;
  width: clamp(200px, 30vw, 300px);
  height: clamp(200px, 30vw, 300px);
  margin: 0;
  transform: ${({ $position }) => {
    switch ($position) {
      case 'left': return 'translateX(-70%) rotate(-5deg)';
      case 'right': return 'translateX(70%) rotate(5deg)';
      default: return 'translateY(0) rotate(0deg)';
    }
  }};
  z-index: ${({ $position }) => {
    switch ($position) {
      case 'center': return 3;
      case 'left': return 2;
      default: return 1;
    }
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
      switch ($position) {
        case 'left': return 'translateX(-60%) rotate(-5deg)';
        case 'right': return 'translateX(60%) rotate(5deg)';
        default: return 'translateY(0) rotate(0deg)';
      }
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    width: clamp(120px, 20vw, 200px);
    height: clamp(120px, 20vw, 200px);
    transform: ${({ $position }) => {
      switch ($position) {
        case 'left': return 'translateX(-50%) rotate(-5deg)';
        case 'right': return 'translateX(50%) rotate(5deg)';
        default: return 'translateY(0) rotate(0deg)';
      }
    }};
  }

  @media (max-width: 360px) {
    width: clamp(90px, 18vw, 120px);
    height: clamp(90px, 18vw, 120px);
    transform: ${({ $position }) => {
      switch ($position) {
        case 'left': return 'translateX(-40%) rotate(-5deg)';
        case 'right': return 'translateX(40%) rotate(5deg)';
        default: return 'translateY(0) rotate(0deg)';
      }
    }};
  }
`

// Scroll button
const ScrollButton = styled.button`
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
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Hero = () => {
  // Get content from JSON
  const { greeting, name, title, description, images } = content.hero;
  
  // Scroll handler
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection aria-labelledby="hero-title" role="banner">
      {/* Text Content */}
      <HeroContent>
        <HeroTitle id="hero-title">
          {greeting}
          <HeroName>{name}</HeroName>
        </HeroTitle>
        <HeroSubtitle>{title}</HeroSubtitle>
        <HeroText>{description}</HeroText>
      </HeroContent>

      {/* Images */}
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

      {/* Scroll Button */}
      <ScrollButton
        onClick={handleScrollToProjects}
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
      </ScrollButton>
    </HeroSection>
  )
}