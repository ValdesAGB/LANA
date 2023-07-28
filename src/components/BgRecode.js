import React from 'react'
import bgRecorder from '../assets/bg.mp4'
import styled from 'styled-components'
import { useContext } from 'react'
import { BackgroundContext } from '../untils/context'

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

function BgRecode() {
  const { back } = useContext(BackgroundContext)

  const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: -2;
    display: ${back ? '' : 'none'};
  `
  return (
    <Container>
      <VideoBackground src={bgRecorder} autoPlay muted loop />
      <Hover />
    </Container>
  )
}

export default BgRecode
