import styled from 'styled-components'
import React, { useContext } from 'react'
import 'animate.css'
import Bounce from 'react-reveal/Bounce'
import { BackgroundContext } from '../untils/context'

const ToogleBtn = styled.button`
  position: fixed;
  z-index: 1000;
  top: 50%;
  right: 0px;
  border: none;
  background-color: transparent;
  @media (min-width: 1200px) {
    transition: all 0.3s;
    &:hover {
      transform: scale(0.8);
    }
  }
`

const Icone = styled.i`
  color: rgba(255, 255, 255, 1);
  font-size: 1.5em;
  @media (min-width: 1200px) {
    font-size: 2em;
  }
`

function Button() {
  const { back, setBack } = useContext(BackgroundContext)

  return (
    <React.Fragment>
      <ToogleBtn onClick={() => setBack(back ? false : true)}>
        <Bounce>
          <Icone className={`bi ${back ? 'bi-file-image' : 'bi-film'}`} />
        </Bounce>
      </ToogleBtn>
    </React.Fragment>
  )
}

export default Button
