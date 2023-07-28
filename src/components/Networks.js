import React from 'react'
import { FooterElements } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const NetworksSection = styled.section`
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`

const List = styled.ul`
  position: fixed;
  top: 40%;
  margin-left: 0.5%;
  @media (min-width: 1400px) {
    top: 50%;
  }

  li {
    margin: 1.5rem 0;
  }
`

const Icone = styled.i`
  color: white;
  transition: color 300ms;
  font-size: 1.2em;
  &:hover {
    color: ${colors.footerIconeHoverColor};
  }
`

function Networks() {
  return (
    <React.Fragment>
      <NetworksSection>
        <List className="list-unstyled">
          {FooterElements.map(({ id, icone }) => (
            <li key={id}>
              <a href="#">
                <Icone className={`bi ${icone}`} />
              </a>
            </li>
          ))}
        </List>
      </NetworksSection>
    </React.Fragment>
  )
}

export default Networks
