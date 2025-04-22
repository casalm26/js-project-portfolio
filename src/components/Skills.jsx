import React from 'react'
import { Button } from './Buttons'

const skillCategories = {
  Code: ['HTML', 'CSS', 'Javascript ES6', 'React', 'Node.js', 'Git & GitHub'],
  Toolbox: ['Cursor', 'Postman', 'Adobe Suite', 'Keynote', 'Airtable', 'Notion', 'Wordpress'],
  Upcoming: ['MongoDB', 'SQL'],
  More: ['Brand Marketing', 'Process Design', 'Agile methodology', 'Leadership']
}

export const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <Button variant="tech" label={category} />
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 