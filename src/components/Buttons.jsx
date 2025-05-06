import styled, { css } from 'styled-components'

const ButtonBase = styled.button`
  border: none;
  cursor: ${props => props.variant === 'tech' ? 'default' : 'pointer'};
  font-family: ${({ theme }) => theme.fonts?.body || "'Poppins', sans-serif"};
  font-weight: 500;
  font-size: var(--font-size-base);
  letter-spacing: 0.02em;
  transition: all var(--transition-normal);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  text-decoration: none;
  min-height: 44px; /* Minimum touch target size */
  min-width: 44px; /* Minimum touch target size */
  padding: var(--space-sm);
  position: relative;
  
  &:hover {
    transform: ${props => props.variant === 'tech' ? 'none' : 'translateY(-2px)'};
  }

  &:focus-visible {
    outline: ${props => props.variant === 'tech' ? 'none' : '3px solid ${({ theme }) => theme.colors?.primary || "#000"}'};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`

const TechButton = styled(ButtonBase)`
  background-color: transparent;
  color: white;
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  border: 1px solid white;
  pointer-events: none;
  min-height: 28px;
  min-width: auto;
  font-weight: 400;
  line-height: 1.2;
`

const ExternalButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors?.primary || '#000'};
  color: ${({ theme }) => theme.colors?.background || 'white'};
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors?.primaryHover || '#333'};
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    width: 100%;
  }
`

const OutlineButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors?.primary || '#000'};
  padding: var(--space-sm) var(--space-md);
  border: 2px solid ${({ theme }) => theme.colors?.primary || '#000'};
  border-radius: var(--radius-md);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors?.primary || '#000'};
    color: ${({ theme }) => theme.colors?.background || 'white'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    width: 100%;
  }
`

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  min-width: 20px;
  margin-left: var(--space-xs);
  
  svg {
    aria-hidden="true";
    pointer-events: none;
  }
`

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const Button = ({ variant, label, icon, link, onClick, ariaLabel }) => {
  const handleClick = (e) => {
    if (variant === 'tech') return; // Prevent click for tech buttons
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
    if (onClick) {
      onClick(e);
    }
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <IconWrapper>
        {icon === 'globe' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" role="img">
            <title>Globe icon</title>
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        )}
        {icon === 'github' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" role="img">
            <title>GitHub icon</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        )}
        {icon === 'arrow-down' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" role="img">
            <title>Arrow down icon</title>
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        )}
        {icon === 'linkedin' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" role="img">
            <title>LinkedIn icon</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        )}
        {icon === 'twitter' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" role="img">
            <title>Twitter icon</title>
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
          </svg>
        )}
      </IconWrapper>
    );
  };

  const buttonProps = {
    onClick: handleClick,
    'aria-label': ariaLabel || label,
    role: variant === 'tech' ? 'presentation' : (link ? 'link' : 'button'),
    variant, // Pass variant to styled components
    ...(link && {
      'aria-haspopup': 'true',
      'aria-expanded': 'false',
    }),
  };

  switch (variant) {
    case 'tech':
      return (
        <TechButton {...buttonProps}>
          {label}
          {renderIcon()}
        </TechButton>
      );
    
    case 'external':
      return (
        <ExternalButton {...buttonProps}>
          {label}
          {renderIcon()}
          {link && <VisuallyHidden>(opens in new tab)</VisuallyHidden>}
        </ExternalButton>
      );
    
    case 'outline':
      return (
        <OutlineButton {...buttonProps}>
          {label}
          {renderIcon()}
          {link && <VisuallyHidden>(opens in new tab)</VisuallyHidden>}
        </OutlineButton>
      );
    
    default:
      return (
        <ButtonBase {...buttonProps}>
          {label}
          {renderIcon()}
          {link && <VisuallyHidden>(opens in new tab)</VisuallyHidden>}
        </ButtonBase>
      );
  }
}

// Example usage:
// Tech tag: <Button variant="tech" label="HTML5" />
// Social profile: <Button variant="social" label="GitHub" icon={<GitHubIcon />} link="https://github.com/username" />
// External link: <Button variant="external" label="View Project" link="https://project-url.com" /> 