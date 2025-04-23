import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'

const ContactSection = styled.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const ContactTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 3rem;
  font-weight: bold;
  color: white;
`

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`

const Name = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Contact = () => {
  return (
    <ContactSection>
      <ContactTitle>Catch me if you can</ContactTitle>
      <ProfileImage 
        src="/assets/IMG_3883_Original 2 2.jpg" 
        alt="Caspian Almerud" 
      />
      <Name>Caspian Almerud</Name>
      <ContactInfo>
        <p>+46(0)760 48 81 83</p>
        <p>caspian@houseofcaspian.com</p>
      </ContactInfo>
      <SocialLinks>
        <Button 
          variant="external" 
          link="https://linkedin.com"
          icon="linkedin"
        />
        <Button 
          variant="external" 
          link="https://github.com"
          icon="github"
        />
        <Button 
          variant="external" 
          link="https://twitter.com"
          icon="twitter"
        />
      </SocialLinks>
    </ContactSection>
  )
} 