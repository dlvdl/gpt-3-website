import React from 'react'
import styled from 'styled-components'

function CTA() {
  return (
    <Wrapper>
      <div className="gpt3__cta">
        <div className="gpt3__cta-content">
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
        <div className="gpt3__cta-button">
          <button type="button">Get Started</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gpt3__cta {
    background: var(--gradient-bar);
    display: flex;
    padding: 2rem;
    margin: 4rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    gap: 1rem;
    animation: gradient 5s ease infinite;
    background-size: 400% 400%;
  }

  .gpt3__cta-content {
  }

  .gpt3__cta-content > p {
    font-size: 12px;
    font-weight: 500;
    line-height: 30px;
  }

  .gpt3__cta-content > h3 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 45px;
  }

  .gpt3__cta-button > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: #ffff;
    font-weight: 800;
    border: none;
    border-radius: 40px;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media screen and (max-width: 650px) {
    .gpt3__cta {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 550px) {
    .gpt3__cta {
      margin: 4rem 2rem;
    }

    .gpt3__cta-content > h3 {
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 32px;
    }
  }
`

export default CTA
