import React from 'react'
import styled from 'styled-components'

// Base heading styles
const baseHeadingStyles = `
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: inherit;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
`

export const Title = styled.h1`
  ${baseHeadingStyles}
  font-size: clamp(3.5rem, 5.5vw, 6rem);
`

export const Heading = styled.h2`
  ${baseHeadingStyles}
  font-size: clamp(3rem, 5vw, 5rem);
`

export const SubHeading = styled.h3`
  ${baseHeadingStyles}
  font-size: clamp(1.5rem, 2.5vw, 2rem);
`

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: ${props => props.small ? '0.875rem' : '1rem'};
  line-height: 1.6;
  margin: 0;
  padding: 0;
  color: inherit;
  opacity: ${props => props.muted ? 0.8 : 1};
`

export const ButtonLabel = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.02em;
`

export const Typography = ({ variant, children, ...props }) => {
  switch (variant) {
    case 'title':
      return <Title {...props}>{children}</Title>
    case 'heading':
      return <Heading {...props}>{children}</Heading>
    case 'subheading':
      return <SubHeading {...props}>{children}</SubHeading>
    case 'button':
      return <ButtonLabel {...props}>{children}</ButtonLabel>
    default:
      return <Text {...props}>{children}</Text>
  }
} 