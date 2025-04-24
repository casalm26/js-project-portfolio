import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset and Base Styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Remove list styles on ul, ol elements with a list role */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.colors?.background || '#FFFFFF'};
    color: ${({ theme }) => theme.colors?.text || '#333333'};
  }

  /* Typography Scale */
  :root {
    --font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
    --font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
    --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
    --font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
    --font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
    --font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
    --font-size-3xl: clamp(1.4rem, 1.4rem + 1.4vw, 2.8rem);
    --font-size-4xl: clamp(2rem, 2rem + 2vw, 4rem);
    
    /* Spacing Scale */
    --space-xs: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);
    --space-sm: clamp(0.75rem, 0.6rem + 0.75vw, 1rem);
    --space-md: clamp(1rem, 0.8rem + 1vw, 1.5rem);
    --space-lg: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
    --space-xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 250ms ease;
    --transition-slow: 350ms ease;
  }

  /* Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Remove built-in form typography styles */
  input, button, textarea, select {
    font: inherit;
  }

  /* Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  /* Create a root stacking context */
  #root {
    isolation: isolate;
  }

  /* Enhanced focus styles */
  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors?.primary || '#000000'};
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* Skip to main content link */
  .skip-to-content {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors?.primary || '#000000'};
    color: ${({ theme }) => theme.colors?.background || '#FFFFFF'};
    padding: var(--space-sm) var(--space-md);
    z-index: 9999;
    text-decoration: none;
    border-radius: var(--radius-sm);
    opacity: 0;
    pointer-events: none;
    
    &:focus {
      opacity: 1;
      pointer-events: all;
      top: var(--space-sm);
    }
  }

  /* Improve keyboard navigation */
  [tabindex="-1"] {
    outline: none;
  }

  /* Ensure proper heading hierarchy */
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-top: 0;
  }

  /* Improve link accessibility */
  a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.2em;
    
    &:hover {
      text-decoration: none;
    }
  }

  /* Improve form element accessibility */
  input, 
  textarea, 
  select, 
  button {
    font: inherit;
    line-height: 1.5;
    margin: 0;
  }

  /* Improve table accessibility */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    text-align: left;
  }

  /* Remove animations when reduced motion is preferred */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Responsive breakpoints */
  @media (max-width: 480px) {
    :root {
      --font-size-base: 0.9rem;
    }
  }
` 