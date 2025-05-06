import styled from 'styled-components'

const TechSection = styled.section`
  background-color: #000000;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TechTitle = styled.h2`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: white;
`

const TechStack = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
`

export const Tech = () => {
  return (
    <TechSection>
      <TechTitle>Tech</TechTitle>
      <TechStack>
        HTML, CSS, JavaScript, EJS, React, React Hooks, Node.js, Web Accessibility, 
        AI-coding, APIs, mob-programming, pair-programming, Git, No/low code, Data Science
      </TechStack>
    </TechSection>
  )
} 