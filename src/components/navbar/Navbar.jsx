import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
const links = ['Home', 'What is GPT?', 'Open AI', 'Case Studies', 'Library']

function Menu({ className }) {
  return (
    <ul className={className}>
      {links.map((link) => {
        return (
          <li>
            <a href="">{link}</a>
          </li>
        )
      })}
    </ul>
  )
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Wrapper className="section">
      <nav className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar_logo">
            <img src={logo} alt="" />

            <ul className="gpt3__navbar-links_container">
              <Menu className="gpt3__navbar-links_container"></Menu>
            </ul>
          </div>

          <div className="gpt3__navbar-sign">
            <a href="">Sign in</a>
            <a className="button" href="">
              Sign up
            </a>
          </div>
        </div>
        <div className="gpt3__navbar-menu">
          {showMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => {
                setShowMenu(!showMenu)
              }}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => {
                setShowMenu(!showMenu)
              }}
            />
          )}
          {showMenu && (
            <div className="gpt3__navbar_menu_container scale-up-center">
              <div className="gpt3__navbar_menu_container-links">
                <Menu className="gpt3__navbar-menu-links"></Menu>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <a href="">Sign in</a>
                  <a className="button" href="">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .gpt3__navbar {
    display: flex;
    padding: 2rem 6rem;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
  }

  .gpt3__navbar-links {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  .gpt3__navbar_logo {
    margin-right: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .gpt3__navbar_logo > img {
    width: 62px;
    height: 60px;
  }

  .gpt3__navbar-links_container {
    gap: 1rem;
    display: flex;
  }

  a {
    color: #ffff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 1.25rem;
    text-transform: capitalize;
    line-height: 25px;
  }

  .gpt3__navbar-sign {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .button {
    padding: 0.5rem 1rem;
    background-color: var(--color-button-bg);
    border-radius: 5px;
    border: none;
  }

  .gpt3__navbar-menu {
    display: none;
    margin-left: 1rem;
  }

  .gpt3__navbar-menu svg {
    cursor: pointer;
  }

  .gpt3__navbar_menu_container {
    position: relative;
    background-color: var(--color-footer);
  }

  .gpt3__navbar_menu_container-links {
    border-radius: 5px;
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 30;
    background-color: var(--color-footer);
    min-width: 210px;
    display: flex;
    flex-direction: column;

    padding: 2rem;
    gap: 1rem;
  }

  .gpt3__navbar-menu_container-links-sign {
    display: none;
  }

  .gpt3__navbar-menu-links {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 0.5rem;
  }

  @media screen and (max-width: 1050px) {
    .gpt3__navbar-links_container {
      display: none;
    }

    .gpt3__navbar-menu {
      display: flex;
    }
  }

  @media screen and (max-width: 700px) {
    .gpt3__navbar {
      padding: 2rem 4rem;
    }
  }

  @media screen and (max-width: 700px) {
    .gpt3__navbar {
      padding: 2rem;
    }

    .gpt3__navbar-sign {
      display: none;
    }

    .gpt3__navbar-menu_container-links-sign {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`

export default Navbar
