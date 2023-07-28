import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { BackgroundContext } from '../untils/context'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`
const Title = styled.h2`
  font-family: ${polices.main};
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.625rem;
  @media (min-width: 992px) {
    font-size: 2rem;
  }
`

const Paragraph = styled.p`
  font-family: ${polices.second};
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
`
const bgCover =
  'https://preview.erilisdesign.com/html/lana/assets/images/image-1.jpg'

function Missions() {
  const { back } = useContext(BackgroundContext)

  const MissionsSection = styled.section`
    background-image: url(${back ? '' : bgCover});
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    padding: 80px 0;
    @media (min-width: 1200px) {
      padding: 80px 5%;
    }
  `

  const Hover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.missionsHoverBgColor};
    opacity: ${back ? '0' : '0.9'};
  `
  return (
    <React.Fragment>
      <MissionsSection id="our-mission">
        <Container className="container">
          <div className="col-lg-6">
            <Title className="animate__animated animate__fadeInUp animate__fast ">
              Our Mission
            </Title>
            <Paragraph className="animate__animated animate__fadeInUp animate__slow">
              Mauris ut sem elementum, tristique velit sed, volutpat mauris. Ut
              interdum nibh sit amet imperdiet condimentum. Nulla sed tellus
              placerat, vehicula risus ac, sollicitudin quam. Quisque pharetra
              porta libero, a sagittis nisl tristique non. Etiam sapien purus,
              cursus eu pulvinar et, tempor sit amet ipsum. Sed a nisl sit amet
              lorem dictum hendrerit.
            </Paragraph>
          </div>
        </Container>
        <Hover />
      </MissionsSection>
    </React.Fragment>
  )
}

export default Missions
