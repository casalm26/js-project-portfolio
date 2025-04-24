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
`

const ImageCard = styled.div`
  position: absolute;
  width: clamp(200px, 30vw, 300px);
  height: clamp(133px, 20vw, 200px);
  transform: ${props => {
    if (props.position === 'left') return 'translateX(-70%) rotate(-5deg)';
    if (props.position === 'right') return 'translateX(70%) rotate(5deg)';
    return 'translateY(0) rotate(0deg)';
  }};
  z-index: ${props => {
    if (props.position === 'center') return 3;
    if (props.position === 'left') return 2;
    return 1;
  }};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    width: clamp(160px, 25vw, 250px);
    height: clamp(107px, 16.67vw, 167px);
    transform: ${props => {
      if (props.position === 'left') return 'translateX(-60%) rotate(-5deg)';
      if (props.position === 'right') return 'translateX(60%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    width: clamp(120px, 20vw, 200px);
    height: clamp(80px, 13.33vw, 133px);
    transform: ${props => {
      if (props.position === 'left') return 'translateX(-50%) rotate(-5deg)';
      if (props.position === 'right') return 'translateX(50%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
  }

  @media (max-width: 360px) {
    width: clamp(90px, 18vw, 120px);
    height: clamp(60px, 12vw, 80px);
    transform: ${props => {
      if (props.position === 'left') return 'translateX(-40%) rotate(-5deg)';
      if (props.position === 'right') return 'translateX(40%) rotate(5deg)';
      return 'translateY(0) rotate(0deg)';
    }};
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
        <ImageCard position="left">
          <img src="/assets/Desk Setup Image.jpg" alt="Desk setup with MacBook" />
        </ImageCard>
        <ImageCard position="center">
          <img src="/assets/IMG_3883_Original 2 2.jpg" alt="Portrait photo" />
        </ImageCard>
        <ImageCard position="right">
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