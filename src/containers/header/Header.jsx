import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import styled from 'styled-components'

function Header() {
  return (
    <Wrapper>
      <div className="gpt3__header section__padding">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="line-height-m text-size-m text-color-primary ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>

          <div className="gpt3__header-content__people">
            <img src={people} alt="people" />
            <p className="line-height-m text-size-m ">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gpt3__header {
    display: flex;
  }

  .gpt3__header-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 5rem;
    flex: 1;
  }

  .gpt3__header-content h1 p {
    font-family: var(--font-family);
  }

  .gpt3__header-content h1 {
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 75px;
    font-size: 3.875rem;
    margin-bottom: 1rem;
  }

  .gpt3__header-content__input {
    width: 100%;
    margin: 2rem 0 1rem;
    display: flex;
  }

  .gpt3__header-content__input,
  input,
  button {
    /* padding: 1.25rem 1rem; */
    font-size: 1.25rem;

    outline: none;
    font-family: var(--font-family);
  }

  .gpt3__header-content__input input {
    color: #ffff;
    background-color: var(--color-blog);
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    flex: 2;
    width: 100%;
    min-height: 50px;
    border: solid 2px var(--color-footer);
    padding: 0 1rem;
  }

  .gpt3__header-content__input button {
    background-color: var(--color-button-bg);
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    color: #ffff;
    font-weight: 700;
    padding: 0 1rem;
    flex: 0.6;
    width: 100%;
    cursor: pointer;
    border: none;
  }

  .gpt3__header-content__people {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    gap: 1rem;
  }

  .gpt3__header-content__people > p {
    color: #ffff;
  }

  .gpt3__header-content__people > img {
    min-height: 38px;
    min-width: 128px;
  }

  .gpt3__header-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gpt3__header-image > img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1050px) {
    .gpt3__header {
      flex-direction: column;
    }

    .gpt3__header-content {
      margin: 0 0 3rem;
    }

    @media screen and (max-width: 650px) {
      .gpt3__header h1 {
        font-size: 3rem;
        line-height: 3.5rem;
      }

      .gpt3__header p {
        font-size: 1rem;
        line-height: 24px;
      }

      .gpt3__header-content__people {
        flex-direction: column;
      }

      .gpt3__header-content__people p {
        margin: 0;
      }

      .gpt3__header-content__input input,
      .gpt3__header-content__input button {
        font-size: 1rem;
      }
    }

    @media screen and (max-width: 390px) {
      .gpt3__header h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }

      .gpt3__header p {
        font-size: 0.75rem;
        line-height: 1rem;
      }

      .gpt3__header-content__input input,
      .gpt3__header-content__input button {
        font-size: 1rem;
      }
    }
  }
`

export default Header
