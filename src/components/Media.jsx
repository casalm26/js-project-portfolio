import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'

const MediaSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

const MediaTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 4rem;
  text-align: center;
  font-weight: bold;
  color: #000;
`

const ArticlesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 4rem;
`

const ArticleCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ArticleImage = styled.img`
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 4/3;
  object-fit: cover;
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ArticleDate = styled.div`
  font-size: 1rem;
  color: #666;
  padding: 4px 12px;
  background-color: #F5F5F5;
  border-radius: 4px;
  width: fit-content;
`

const ArticleTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin: 0;
`

const ArticleDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
`

const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
`

const articles = [
  {
    date: "April 5",
    title: "The antifragility of mass",
    description: "Removing fragility doesn't mean something becomes antifragile. It means you've removed fragility. Afragile as some would say, or robust.",
    link: "#",
    image: "/assets/antifragility-of-mass.png"
  },
  {
    date: "March 30",
    title: "You'll pay as much as you do to consume to get to the right people",
    description: "In a digital society, the network is the most important thing there is. With a whole lot more arguing than I'm going to present here, they made a compelling argument that the people you have around you are going to be the most important asset you have.",
    link: "#",
    image: "/assets/pay-for-network.png"
  },
  {
    date: "March 23",
    title: "The Decision Box",
    description: '"Don\'t make 1000 decisions when 1 will do"',
    link: "#",
    image: "/assets/decision-box.png"
  },
]

export const Media = () => {
  return (
    <MediaSection>
      <MediaTitle>Media</MediaTitle>
      <ArticlesGrid>
        {articles.map((article, index) => (
          <ArticleCard key={index}>
            <ArticleImage 
              src={article.image} 
              alt={article.title}
            />
            <ArticleContent>
              <ArticleDate>{article.date}</ArticleDate>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
              <Button 
                variant="external" 
                label="Read article" 
                link={article.link}
                icon="globe"
              />
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>
      <SeeMoreContainer>
        <Button 
          variant="outline" 
          label="See more articles" 
          icon="arrow-down"
        />
      </SeeMoreContainer>
    </MediaSection>
  )
} 