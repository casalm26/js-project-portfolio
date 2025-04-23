import React from 'react'
import styled from 'styled-components'

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

const HeroName = styled.h2`
  font-size: clamp(2.5rem, 5vw + 1rem, 5rem);
  margin-bottom: var(--space-sm);
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.text || '#333'};
`

const HeroSubtitle = styled.h3`
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
  gap: -20px;
  margin: var(--space-lg) 0;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    gap: var(--space-sm);
    margin: var(--space-md) 0;
  }
`

const ImageCard = styled.div`
  width: clamp(200px, 30vw, 300px);
  height: clamp(133px, 20vw, 200px);
  position: relative;
  transform: rotate(${props => props.rotation}deg);
  transition: transform var(--transition-normal);
  margin: var(--space-xs);

  &:hover {
    transform: rotate(${props => props.rotation}deg) translateY(-10px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    transform: rotate(0deg);
    &:hover {
      transform: translateY(-10px);
    }
  }
`

const DownArrow = styled.div`
  margin-top: var(--space-lg);
  animation: bounce 2s infinite;
  
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
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Hello there, I'm</HeroTitle>
        <HeroName>Caspian</HeroName>
        <HeroSubtitle>Professional Generalist with Coding Capabilities</HeroSubtitle>
        <HeroText>
          I'm a pragmatic developer known for my broad experience in working across different
          industries. Be it with code, other tech or my interpersonal skills, I enjoy solving problems
          and driving progress in businesses.
        </HeroText>
      </HeroContent>
      <HeroImages>
        <ImageCard rotation={-5}>
          <img src="/assets/Desk Setup Image.jpg" alt="Desk setup with MacBook" />
        </ImageCard>
        <ImageCard rotation={0}>
          <img src="/assets/IMG_3883_Original 2 2.jpg" alt="Portrait photo" />
        </ImageCard>
        <ImageCard rotation={5}>
          <img src="/assets/Filip Kvasnak Unsplash.jpg" alt="Mountain landscape" />
        </ImageCard>
      </HeroImages>
      <DownArrow>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </DownArrow>
    </HeroSection>
  )
} 