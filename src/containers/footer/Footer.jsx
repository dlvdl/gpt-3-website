import React from 'react'
import { logo } from '../imports'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
      <div className="gpt3__footer-container section__padding">
        <div className="gpt3__footer-heading gradient__text">
          <h2>Do you want to step in to the future before others</h2>
        </div>
        <div className="gpt3__footer-button">
          <a href="#">Request Early Access</a>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links-logo">
            <img src={logo} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-links-column">
            <h4 className="gpt3__footer-links-column-heading">Links</h4>
            <ul>
              <li>
                <a href="#">Overons</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Counters</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="gpt3__footer-links-column">
            <h4 className="gpt3__footer-links-column-heading">Company</h4>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Counters</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="gpt3__footer-links-column">
            <h4 className="gpt3__footer-links-column-heading">Get in touch</h4>
            <ul>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  .gpt3__footer-background {
    height: 100%;
  }

  .gpt3__footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: var(--color-footer);
  }

  .gpt3__footer-links {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;
    flex-wrap: wrap;
    width: 100%;
  }

  .gpt3__footer-heading {
    margin-bottom: 3rem;
    width: 100%;
  }

  .gpt3__footer-heading > h2 {
    text-align: center;
    font-size: 3.75rem;
    line-height: 75px;
    font-weight: 800;
  }
  .gpt3__footer-button {
    margin-bottom: 10rem;
  }

  .gpt3__footer-button > a {
    font-family: 'Gilroy-Medium';
    font-size: 1.125rem;
    border: 2px solid #fff;
    padding: 1rem;
  }

  .gpt3__footer-links-column {
    max-width: 250px;
    font-size: 0.875rem;
  }

  .gpt3__footer-links-column h4 {
    font-family: 'Gilroy-Bold';
    margin-bottom: 2.25rem;
  }

  .gpt3__footer-links-column > ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .gpt3__footer-links-column > ul > li {
    font-family: 'Gilroy-Medium';
  }

  .gpt3__footer-links-logo {
    max-width: 168px;
  }

  .gpt3__footer-links-logo > img {
    width: 118px;
  }

  .gpt3__footer-links-logo p {
    font-size: 0.75rem;
    margin-top: 1.5rem;
    line-height: 14px;
    font-family: 'Gilroy-Medium';
  }

  a {
    font-family: 'Gilroy-Medium';
  }

  @media screen and (max-width: 850px) {
    .gpt3__footer-heading > h2 {
      font-size: 2.75rem;
      line-height: 50px;
    }

    .gpt3__footer-button {
      margin-bottom: 5rem;
    }
  }

  @media screen and (max-width: 550px) {
    .gpt3__footer-heading > h2 {
      font-size: 1.75rem;
      line-height: 42px;
    }

    .gpt3__footer-button {
      margin-bottom: 5rem;
    }
  }
`

export default Footer
