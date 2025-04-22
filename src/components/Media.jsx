import React from 'react'
import { Button } from './Buttons'

const articles = [
  {
    date: "April 5",
    title: "The antifragility of mass",
    description: "Removing fragility doesn't mean something becomes antifragile. It means you've removed fragility. Afragile as some would say, or robust.",
    link: "#",
  },
  {
    date: "March 30",
    title: "You'll pay as much as you do to consume to get to the right people",
    description: "In a digital society, the network is the most important thing there is. With a whole lot more arguing than I'm going to present here, they made a compelling argument that the people you have around you are going to be the most important asset you have.",
    link: "#",
  },
  {
    date: "March 23",
    title: "The Decision Box",
    description: '"Don\'t make 1000 decisions when 1 will do"',
    link: "#",
  },
]

export const Media = () => {
  return (
    <section className="media-section">
      <h2>Media</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <article key={index} className="article-card">
            <div className="article-date">{article.date}</div>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Button 
              variant="external" 
              label="Read article" 
              link={article.link}
            />
          </article>
        ))}
      </div>
      <Button 
        variant="external" 
        label="See more articles" 
        link="#"
      />
    </section>
  )
} 