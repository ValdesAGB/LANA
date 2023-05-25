import React, { useEffect, useState } from 'react'
import { navElements, site } from '../data'
import styled from 'styled-components'

function Header() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [menu, setMenu] = useState(false)
  const menuState = (e) => {
    e.preventDefault()
    setMenu(!menu ? true : false)
  }

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset === 0) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const Span = styled.span`
    position: fixed;
    @media (max-width: 767px) {
      background-color: ${isAtTop && menu ? 'rgba(0, 0, 0, 0.7)' : null};
    }
    background-color: ${isAtTop ? 'transparent' : 'rgba(255, 255, 255, 0.9)'};
  `

  const ListLink = styled.a`
    color: ${isAtTop ? 'white' : 'black'};
    opacity: ${isAtTop ? '1' : '0.7'};
    text-decoration: none;
    transition: color 600ms, opacity 400ms;
    &:hover {
      opacity: ${isAtTop ? '0.8' : '1'};
      color: ${isAtTop ? 'white' : 'black'};
    }
  `
  const SiteLink = styled.a`
    text-decoration: none;
    font-size: 2em;
    font-weight: 900;
    color: ${isAtTop ? 'white' : 'black'};
    &:hover {
      color: ${isAtTop ? 'white' : 'black'};
    }
  `

  const DivHeader = styled.div`
    color: white;
    z-index: 9;
    position: relative;
    top: 0;
    bottom: 0;
  `
  const ListDiv = styled.div`
    @media (max-width: 768px) {
      border-top: solid 2px ${!isAtTop ? 'black' : 'white'};
      padding-top: 10px;
    }
  `

  return (
    <React.Fragment>
      <DivHeader>
        <Span className="row align-items-center  w-100 p-2 p-lg-4">
          <div className="col-12  col-lg-4 text-center text-lg-start">
            <SiteLink href="#" className="d-none d-md-block">
              {site}
            </SiteLink>
            <SiteLink
              href="#"
              className="d-block d-md-none"
              onClick={(e) => menuState(e)}
            >
              {site}
            </SiteLink>
          </div>
          <div className="col-12  col-lg">
            <ListDiv className="d-lg-none" />
            <span className={menu ? '' : 'd-none d-md-block'}>
              <ul className=" list-unstyled row text-center ">
                {navElements.map(({ id, title, href }) => (
                  <li key={id} className="col-6 mb-2 mb-md-0 col-md">
                    <ListLink href={href}>{title}</ListLink>
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </Span>
      </DivHeader>
    </React.Fragment>
  )
}

export default Header
