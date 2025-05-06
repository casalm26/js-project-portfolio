import styled from 'styled-components'
import { Button } from './Buttons'
import content from '../data/content.json'

// Main section container
const MediaSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
`

// Section title
const MediaTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 5rem);
  margin-bottom: 4rem;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`

// Articles list
const ArticlesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 4rem;
  list-style: none;
  padding: 0;
`

// Article card
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

// Article image
const ArticleImage = styled.img`
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 4/3;
  object-fit: cover;
`

// Article content container
const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

// Article date
const ArticleDate = styled.time`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  padding: 4px 12px;
  border: 1px solid currentColor;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 16px;
`

// Article title
const ArticleTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

// Article description
const ArticleDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

// See more button container
const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Media = () => {
  // Get content from JSON
  const { title, articles } = content.media;
  
  return (
    <MediaSection aria-labelledby="media-title">
      {/* Section Title */}
      <MediaTitle id="media-title">
        {title}
      </MediaTitle>

      {/* Articles List */}
      <ArticlesList role="list" aria-label="Articles">
        {articles.map((article, index) => {
          const articleId = `article-${index + 1}`
          
          return (
            <ArticleCard 
              key={article.title}
              role="listitem"
              aria-labelledby={articleId}
            >
              {/* Article Image */}
              <ArticleImage 
                src={article.image} 
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="600"
                height="450"
              />

              {/* Article Content */}
              <ArticleContent>
                <ArticleDate dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </ArticleDate>
                <ArticleTitle id={articleId}>
                  {article.title}
                </ArticleTitle>
                <ArticleDescription>
                  {article.description}
                </ArticleDescription>
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
      </ArticlesList>

      {/* See More Button */}
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