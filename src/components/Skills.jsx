import styled from 'styled-components'
import { Button } from './Buttons'

const SkillsSection = styled.section`
  background-color: #000;
  color: white;
  padding: 6rem 2rem;
  width: 100%;
`

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SkillsTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 4rem;
  text-align: center;
  font-weight: bold;
  color: white;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const CategoryButton = styled(Button)`
  width: fit-content;
`

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const SkillItem = styled.li`
  color: white;
  font-size: 1rem;
  line-height: 1.5;
`

const skillCategories = {
  Code: ['HTML', 'CSS', 'Javascript ES6', 'React', 'Node.js', 'Git & GitHub'],
  Toolbox: ['Cursor', 'Postman', 'Adobe Suite', 'Keynote', 'Airtable', 'Notion', 'Wordpress'],
  Upcoming: ['MongoDB', 'SQL'],
  More: ['Brand Marketing', 'Process Design', 'Agile methodology', 'Leadership']
}

export const Skills = () => {
  return (
    <SkillsSection>
      <SkillsContainer>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsGrid>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <SkillCategory key={category}>
              <CategoryButton variant="tech" label={category} />
              <SkillsList>
                {skills.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  )
} 