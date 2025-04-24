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
  font-size: clamp(2.5rem, 5vw, 5rem);
  margin-bottom: 4rem;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`

const ArticlesGrid = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 4rem;
  list-style: none;
  padding: 0;
`

const ArticleCard = styled.li`
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

const ArticleDate = styled.time`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  padding: 4px 12px;
  border: 1px solid currentColor;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 16px;
`

const ArticleTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

const ArticleDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
`

const articles = [
  {
    date: "2024-04-05",
    title: "The antifragility of mass",
    description: "Removing fragility doesn't mean something becomes antifragile. It means you've removed fragility. Afragile as some would say, or robust.",
    link: "#",
    image: "/assets/antifragility-of-mass.png"
  },
  {
    date: "2024-03-30",
    title: "You'll pay as much as you do to consume to get to the right people",
    description: "In a digital society, the network is the most important thing there is. With a whole lot more arguing than I'm going to present here, they made a compelling argument that the people you have around you are going to be the most important asset you have.",
    link: "#",
    image: "/assets/pay-for-network.png"
  },
  {
    date: "2024-03-23",
    title: "The Decision Box",
    description: '"Don\'t make 1000 decisions when 1 will do"',
    link: "#",
    image: "/assets/decision-box.png"
  },
]

export const Media = () => {
  return (
    <MediaSection aria-labelledby="media-title">
      <MediaTitle id="media-title">Media</MediaTitle>
      <ArticlesGrid role="list" aria-label="Articles">
        {articles.map((article, index) => {
          const articleId = `article-${index + 1}`
          return (
            <ArticleCard 
              key={article.title}
              role="listitem"
              aria-labelledby={articleId}
            >
              <ArticleImage 
                src={article.image} 
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="600"
                height="450"
              />
              <ArticleContent>
                <ArticleDate dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                </ArticleDate>
                <ArticleTitle id={articleId}>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <Button 
                  variant="external" 
                  label="Read full article"
                  link={article.link}
                  icon="globe"
                  aria-describedby={articleId}
                />
              </ArticleContent>
            </ArticleCard>
          )
        })}
      </ArticlesGrid>
      <SeeMoreContainer>
        <Button 
          variant="outline" 
          label="See more articles"
          icon="arrow-down"
          aria-label="View more articles in the archive"
        />
      </SeeMoreContainer>
    </MediaSection>
  )
} 