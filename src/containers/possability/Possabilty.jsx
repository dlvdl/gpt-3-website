import React from 'react'
import possabilityImage from '../../assets/possibility.png'
import styled from 'styled-components'

function Possabilty() {
  return (
    <Wrapper>
      <div className="gpt3__possability section__padding" id="possability">
        <div className="gpt3__possability-image">
          <img src={possabilityImage} alt="" />
        </div>
        <div className="gpt3__possability-content">
          <a href="#">Request Early Access to Get Started</a>
          <h2 className="gradient__text">
            The possibilities are beyond your imagination
          </h2>
          <p className="text-color-primary">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a href="#">Request Early Access to Get Started</a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gpt3__possability {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }

  .gpt3__possability-content,
  .gpt3__possability-image {
    flex: 1;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .gpt3__possability-content {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 1rem;
    align-self: flex-end;
    padding-bottom: 1rem;
  }

  .gpt3__possability-content a {
    color: #71e5ff;
  }
  .gpt3__possability-content a:last-child {
    color: #ff8a71;
  }

  .gpt3__possability-content a:last-child,
  .gpt3__possability-content a {
    font-weight: 500;
    line-height: 30px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 45px;
  }

  @media screen and (max-width: 950px) {
    .gpt3__possability {
      flex-direction: column;
    }
  }
`

export default Possabilty
