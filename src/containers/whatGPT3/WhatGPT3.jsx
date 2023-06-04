import React from 'react'
import styled from 'styled-components'
import { Feature } from '../../components/index'

function WhatGPT3() {
  return (
    <Wrapper>
      <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
        <div className="gpt3__whatgpt3-feature-compontent">
          <Feature
            title={'What is GPT-3'}
            text={
              'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
            }
          />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>

        <div className="gpt3__whatgpt3-container">
          <Feature
            title={'Chatbots'}
            text={
              'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
            }
          />
          <Feature
            title={'Knowledgebase'}
            text={
              'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
            }
          />
          <Feature
            title={'Education'}
            text={
              'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
            }
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gpt3__whatgpt3-feature-compontent {
    width: 100%;
  }

  .gpt3__whatgpt3-heading {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-family: var(--font-family);
    margin: 4rem 0 2rem;
  }

  .gpt3__whatgpt3-heading > h1 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 45px;
  }

  .gpt3__whatgpt3-heading p {
    color: #ff8a71;
    font-weight: 500;
    cursor: pointer;
    flex-wrap: wrap;
  }

  .gpt3__whatgpt3-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    flex-wrap: wrap;
  }

  .gpt3__whatgpt3-container div {
    flex-direction: column;
    flex: 1;
  }

  @media screen and (max-width: 850px) {
    .gpt3__whatgpt3-heading {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0rem;
    }

    .gpt3__whatgpt3-heading p {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 650px) {
    /* Customizing feature component as per needs */
    .gpt3__whatgpt3-feature .gpt3__features-container__feature {
      flex-direction: column;
    }

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

export default WhatGPT3
