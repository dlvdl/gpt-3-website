import React from 'react'
import styled from 'styled-components'

function Article({ imgUrl, date, title }) {
  return (
    <Wrapper>
      <div className="gpt3__blog-container_article">
        <div className="gpt3__blog-container_article-img">
          <img src={imgUrl} alt="blog" />
        </div>
        <div className="gpt3__blog-container_article-content">
          <p>{date}</p>
          <h3>{title}</h3>
          <a href="#">Read full article</a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .gpt3__blog-container_article {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--color-footer);
  }

  .gpt3__blog-container_article-img > img {
    width: 100%;
    height: 100%;
  }

  .gpt3__blog-container_article-content {
    padding: 1rem;
    color: #ffff;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-weight: 700;
    line-height: 30px;
  }

  .gpt3__blog-container_article-content > h3 {
    font-size: 1.56rem;
  }

  @media screen and (max-width: 990px) {
    .gpt3__blog-container_article-img {
      min-height: 250px;
    }

    @media screen and (max-width: 770px) {
      .gpt3__blog-container_article-content > h3 {
        line-height: 30px;
      }
    }
  }
`
export default Article
