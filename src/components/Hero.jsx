import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: white;
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-size: 1.125rem; // 18px
  margin-bottom: 0.5rem;
  font-weight: normal;
`

const HeroName = styled.h2`
  font-size: 5rem; // 80px
  margin-bottom: 1rem;
  font-weight: bold;
`

const HeroSubtitle = styled.h3`
  font-size: 1.25rem; // 20px
  margin-bottom: 1.5rem;
  font-weight: normal;
`

const HeroText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  color: #333;
`

const HeroImages = styled.div`
  display: flex;
  justify-content: center;
  gap: -20px; // Negative gap for overlapping
  margin: 2rem 0;
`

const ImageCard = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  transform: rotate(${props => props.rotation}deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(${props => props.rotation}deg) translateY(-10px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

const DownArrow = styled.div`
  margin-top: 2rem;
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
          <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </DownArrow>
    </HeroSection>
  )
} 