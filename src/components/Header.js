import React from 'react'
import styled, { keyframes } from 'styled-components'
import { logo, navElements } from '../data'
import { polices } from '../untils/polices'
import { useEffect } from 'react'
import { useState } from 'react'
import { colors } from '../untils/colors'

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const Navbar = styled.nav``

function Header() {
  const [top, setTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      const isTop = window.scrollY === 0
      setTop(isTop ? true : false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const Navigation = styled.nav`
    position: fixed;
    z-index: 3;
    top: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media (min-width: 992px) {
      animation: ${slideDownAnimation} 1s ease-in-out;
      background-color: ${top ? 'transparent' : 'white'};
    }

    @media (min-width: 1400px) {
      padding-left: 9rem;
      padding-right: 9rem;
    }
  `

  const Link = styled.a`
    font-family: ${polices.second};
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    @media (min-width: 992px) {
      color: ${top ? 'white' : colors.LinkColorIfTopIsFalse};
    }
    &:hover {
      color: ${top
        ? colors.LinkHoverColorIfTopIsTrue
        : colors.LinkHoverColorIfTopIsFalse};
    }

    &:focus {
      color: ${top
        ? colors.LinkHoverColorIfTopIsTrue
        : colors.LinkHoverColorIfTopIsFalse};
    }
  `

  return (
    <React.Fragment>
      <Navigation className="row">
        <div>
          <div className="container">
            <Navbar className=" row navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className=" col-5 col-xl-6">
                  <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse col"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {navElements.map(({ id, title, href }) => (
                      <li className="nav-item" key={id}>
                        <Link className="nav-link" href={href}>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Navbar>
          </div>
        </div>
      </Navigation>
    </React.Fragment>
  )
}

export default Header
