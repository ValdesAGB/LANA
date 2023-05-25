import React from 'react'
import { FooterElements } from '../data'
import styled from 'styled-components'

function Networks() {
  const Section = styled.section`
    position: relative;
  `

  const List = styled.ul`
    position: fixed;
    @media (min-width: 1440px) {
      top: 50%;
      left: 1%;
    }
    top: 50%;
    left: 2%;
  `

  const Icone = styled.i`
    color: rgba(255, 255, 255, 0.7);
    transition: color 300ms;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  `

  return (
    <React.Fragment>
      <Section className="row">
        <List className="list-unstyled  d-none d-xl-block">
          {FooterElements.map(({ id, icone, href }) => (
            <li key={id} className=" my-3">
              <a href="#">
                <Icone className={`bi ${icone} fs-5`} />
              </a>
            </li>
          ))}
        </List>
      </Section>
    </React.Fragment>
  )
}

export default Networks
