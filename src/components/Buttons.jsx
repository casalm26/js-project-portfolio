import React from 'react'
import styled, { css } from 'styled-components'

const ButtonBase = styled.button`
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const TechButton = styled(ButtonBase)`
  background-color: #F5F5F5;
  color: #333;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
`

const ExternalButton = styled(ButtonBase)`
  background-color: #000;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    background-color: #333;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const OutlineButton = styled(ButtonBase)`
  background-color: transparent;
  color: #000;
  padding: 12px 24px;
  border: 2px solid #000;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    background-color: #000;
    color: white;
  }
`

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`

export const Button = ({ variant, label, icon, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <IconWrapper>
        {icon === 'globe' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        )}
        {icon === 'github' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        )}
        {icon === 'arrow-right' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        )}
      </IconWrapper>
    );
  };

  switch (variant) {
    case 'tech':
      return <TechButton>{label}</TechButton>;
    
    case 'external':
      return (
        <ExternalButton onClick={handleClick}>
          {label}
          {renderIcon()}
        </ExternalButton>
      );
    
    case 'outline':
      return (
        <OutlineButton onClick={handleClick}>
          {label}
          {renderIcon()}
        </OutlineButton>
      );
    
    default:
      return <ButtonBase onClick={handleClick}>{label}</ButtonBase>;
  }
}

// Example usage:
// Tech tag: <Button variant="tech" label="HTML5" />
// Social profile: <Button variant="social" label="GitHub" icon={<GitHubIcon />} link="https://github.com/username" />
// External link: <Button variant="external" label="View Project" link="https://project-url.com" /> 