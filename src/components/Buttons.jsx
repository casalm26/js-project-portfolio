import React from 'react'

export const Button = ({ variant, label, icon, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

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
          <button onClick={handleClick} className="button button-social">
            {icon && <span className="button-icon">{icon}</span>}
            {label}
          </button>
        )
      
      case 'external':
        return (
          <button onClick={handleClick} className="button button-external">
            {label}
            <span className="button-arrow">→</span>
          </button>
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