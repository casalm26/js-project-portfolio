import React from 'react'

export const Button = ({ variant, label, icon, link }) => {
  // Helper function to determine which button type to render
  const renderButton = () => {
    switch (variant) {
      case 'tech':
        return (
          <button className="button button-tech">
            {label}
          </button>
        )
      
      case 'social':
        return (
          <a href={link} className="button button-social" target="_blank" rel="noopener noreferrer">
            {icon && <span className="button-icon">{icon}</span>}
            {label}
          </a>
        )
      
      case 'external':
        return (
          <a href={link} className="button button-external" target="_blank" rel="noopener noreferrer">
            {label}
            <span className="button-arrow">→</span>
          </a>
        )
      
      default:
        return (
          <button className="button">
            {label}
          </button>
        )
    }
  }

  return renderButton()
}

// Example usage:
// Tech tag: <Button variant="tech" label="HTML5" />
// Social profile: <Button variant="social" label="GitHub" icon={<GitHubIcon />} link="https://github.com/username" />
// External link: <Button variant="external" label="View Project" link="https://project-url.com" /> 