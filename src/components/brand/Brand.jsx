import React from 'react'
import styled from 'styled-components'
import { google, slack, atlassian, dropbox, shopify } from './import'

function Brand() {
  return (
    <Wrapper>
      <div className="gpt3__brand section_padding">
        <div>
          <img src={google} alt="google" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
        <div>
          <img src={atlassian} alt="atlassian" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
        <div>
          <img src={shopify} alt="shopify" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gpt3__brand {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 1rem;
    gap: 1rem;
  }

  .gpt3__brand div {
    flex: 1;
    max-width: 150px;
    min-width: 120px;
    display: flex;
    justify-content: center;
  }
`

export default Brand
