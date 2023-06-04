import React from 'react'
import styled from 'styled-components'

function Feature({ title, text }) {
  return (
    <Wrapper>
      <div className="gpt3__features-container__feature">
        <div className="gpt3__features-container__feature-title">
          <div></div>
          <h1 className="text-size-m ">{title}</h1>
        </div>
        <div className="gpt3__features-container__feature-text">
          <p className="text-color-primary">{text}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gpt3__features-container__feature {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }

  .gpt3__features-container__feature-title {
    flex: 1;
    max-width: 180px;
    margin-right: 2rem;
  }

  .gpt3__features-container__feature-title h1 {
    font-weight: 800;
    color: #ffff;
    line-height: 24px;
    font-size: 1.5rem;
  }

  .gpt3__features-container__feature-title h1::before {
    display: block;
    content: '';
    width: 30%;
    height: 3px;
    background: var(--gradient-bar);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.25rem;
  }

  .gpt3__features-container__feature-text {
    flex: 2;
    max-width: 24.3rem;
    display: flex;
  }

  .gpt3__features-container__feature-text p {
  }
`

export default Feature
