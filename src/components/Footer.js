import React from 'react'
import { FooterElements } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const date = new Date()

const FooterSection = styled.footer`
  background-color: ${colors.FooterSectionBgColor};
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media (min-width: 992px) {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
`

const IconeContainer = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
`

const ListItem = styled.li`
  margin: 0 15px;
`

const ListLink = styled.a`
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  transition: color 400ms;
  &:hover {
    color: #f03c6f;
  }
`

const Icone = styled.i`
  color: ${colors.footerIconeColor};
  transition: 0.3s;
  &:hover {
    color: ${colors.footerIconeHoverColor};
  }
`

const Copyright = styled.div`
  text-align: center;
  color: ${colors.footerIconeColor};
  h6 {
    font-family: ${polices.second};
    font-weight: 400;
  }
  a {
    font-family: ${polices.second};
    font-weight: bold;
    color: ${colors.footerIconeColor};
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      color: ${colors.footerIconeHoverColor};
    }
  }
`

function Footer() {
  return (
    <React.Fragment>
      <FooterSection className="row">
        <div>
          <div className="container">
            <IconeContainer>
              <ul className="list-inline">
                {FooterElements.map(({ id, icone }) => (
                  <ListItem key={id} className="list-inline-item" title={id}>
                    <ListLink href="#">
                      <Icone className={`bi ${icone}`} />
                    </ListLink>
                  </ListItem>
                ))}
              </ul>
            </IconeContainer>
            <Copyright>
              <h6>
                &copy; {date.getFullYear()} Lana - All Rights Reserved -{' '}
                <a target="_blank" href="https://webgrowth.valdesagbokoni.com/">
                  WebGrowth
                </a>
              </h6>
            </Copyright>
          </div>
        </div>
      </FooterSection>
    </React.Fragment>
  )
}

export default Footer
