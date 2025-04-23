import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* Import fonts */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

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
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts?.body || "'Poppins', sans-serif"};
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
    --font-size-3xl: clamp(2rem, 1.8rem + 1.25vw, 3rem);
    --font-size-4xl: clamp(3rem, 2.5rem + 2.5vw, 5rem);
    
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
    outline-offset: 2px;
  }

  /* Remove all animations, transitions and smooth scroll when user prefers reduced motion */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Responsive breakpoints */
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    :root {
      --font-size-base: 0.9rem;
    }
  }
` 