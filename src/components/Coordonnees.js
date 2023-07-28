import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'

const CoordonneesInformations = styled.div`
  margin-bottom: 3rem;
`

const Icone = styled.i`
  margin-bottom: 1rem;
  font-size: 2rem;
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`

const Informations = styled.p`
  font-family: ${polices.second};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
`

function Coordonnees({ array }) {
  return (
    <React.Fragment>
      <div className="col-12 col-lg ">
        <div className="row">
          {array.map(({ id, icone, text }) => (
            <CoordonneesInformations
              className="col-12 col-md-4 col-lg-6 animate__animated animate__fadeInUp animate__delay-1s"
              key={id}
            >
              <Icone className={`bi ${icone}`} />
              <Informations>{text}</Informations>
            </CoordonneesInformations>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Coordonnees
