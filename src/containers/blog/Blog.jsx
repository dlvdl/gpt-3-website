import React from 'react'
import { Article } from '../../components/index'
import { blog1, blog2, blog3, blog4, blog5 } from '../imports'
import styled from 'styled-components'

function Blog() {
  return (
    <Wrapper>
      <div classname="gpt3__blo  padding__section">
        <div className="gpt3__blog-heading">
          <h2 className="gradient__text">
            A lot is happening, We are blogging about it.
          </h2>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container-groupA">
            <Article
              imgUrl={blog1}
              date={'04/06/2023'}
              title={
                'GPT-3 and Open  AI is the future. Let us exlore how it is?'
              }
            ></Article>
          </div>
          <div className="gpt3__blog-container-groupB">
            <Article
              imgUrl={blog2}
              date={'04/06/2023'}
              title={
                'GPT-3 and Open  AI is the future. Let us exlore how it is?'
              }
            ></Article>
            <Article
              imgUrl={blog3}
              date={'04/06/2023'}
              title={
                'GPT-3 and Open  AI is the future. Let us exlore how it is?'
              }
            ></Article>
            <Article
              imgUrl={blog4}
              date={'04/06/2023'}
              title={
                'GPT-3 and Open  AI is the future. Let us exlore how it is?'
              }
            ></Article>
            <Article
              imgUrl={blog5}
              date={'04/06/2023'}
              title={
                'GPT-3 and Open  AI is the future. Let us exlore how it is?'
              }
            ></Article>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gpt3__blo {
    display: none;
  }

  .gpt3__blog-container {
    display: flex;
    padding: 4rem;
    gap: 2rem;
    height: 100%;
    width: 100%;
  }

  .gpt3__blog-heading {
    padding: 0 4rem;
  }

  .gpt3__blog-heading {
    font-size: 2rem;
    font-weight: 800;
  }

  .gpt3__blog-container-groupA {
    flex: 0.75;
  }

  .gpt3__blog-container-groupB {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .gpt3__blog-container-groupA > div {
    height: 100%;
  }

  @media screen and (max-width: 990px) {
    .gpt3__blog-container {
      flex-direction: column-reverse;
    }

    .gpt3__blog-container-groupA > div {
      width: 48%;
    }

    .gpt3__blog-container-groupA > div > .gpt3__blog-container_article-img {
      height: 250px;
    }

    .gpt3__blog-heading > h2 {
      line-height: 45px;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 770px) {
    .gpt3__blog-container-groupB {
      grid-template-columns: repeat(1, 1fr);
    }

    .gpt3__blog-container-groupA > div {
      width: 100%;
    }
  }
`

export default Blog
