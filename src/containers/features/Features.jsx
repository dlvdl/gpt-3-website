import React from 'react'
import styled from 'styled-components'
import { Feature } from '../../components/index'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: ' From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: ' From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Really boy law county',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
]

function Features() {
  return (
    <Wrapper>
      <div className="gpt3__header section__padding">
        <div className="gpt3__features__container">
          <div className="gpt3__features__container-heading">
            <h1 className="gradient__text">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <p>Request Early Access to Get Started</p>
          </div>

          <div className="gpt3__features__container-features">
            {featuresData.map(({ title, text }, i) => {
              return <Feature key={i} title={title} text={text} />
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gpt3__features__container {
    display: flex;
    gap: 4rem;
  }

  .gpt3__features__container-heading {
    flex: 1;
  }

  .gpt3__features__container-features {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .gpt3__features__container-heading > h1 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 45px;
    margin-bottom: 1.875rem;
  }

  .gpt3__features__container-heading p {
    color: #ff8a71;
    font-weight: 500;
    cursor: pointer;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 850px) {
    .gpt3__features__container {
      flex-direction: column;
    }

    .gpt3__features__container-features {
      gap: 1rem;
    }
  }

  @media screen and (max-width: 650px) {
    /* Customizing feature component as per needs */

    /* Customizing feature component as per needs */
    .gpt3__whatgpt3-feature .gpt3__features-container_feature-text {
      margin-top: 0.5rem;
    }

    .gpt3__whatgpt3-heading h1 {
      font-size: 28px;
      line-height: 40px;
    }
  }

  @media screen and (max-width: 350px) {
    /* Customizing feature component as per needs */
    .gpt3__whatgpt3-container .gpt3__features-container__feature {
      margin: 1rem 0;
      min-width: 100%;
    }
  }
`

export default Features
