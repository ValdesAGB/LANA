import React from 'react'
import { DoElements } from '../data'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { useContext } from 'react'
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

const Informations = styled.div`
  margin-bottom: 3rem;
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

const Content = styled.div`
  margin-bottom: 3rem;
`

const Icone = styled.i`
  font-size: 3.2rem;
  margin-bottom: 16px;
`

const DataText = styled.h4`
  font-family: ${polices.main};
  font-size: 1.375rem;
  font-weight: 400;
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`
const bgCover =
  'https://preview.erilisdesign.com/html/lana/assets/images/image-2.jpg'

function Do() {
  const { back } = useContext(BackgroundContext)

  const DoSection = styled.section`
    background-image: url(${back ? '' : bgCover});
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    padding: 5rem 0 3rem;
    @media (min-width: 576px) and (max-width: 1199px) {
      padding: 5rem 0 2rem;
    }
    @media (min-width: 1200px) {
      padding: 5rem 5%;
    }
  `

  const Hover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.homeHoverBgColor};
    opacity: ${back ? '0' : '0.9'};
  `

  return (
    <React.Fragment>
      <DoSection id="what-we-do">
        <Container className="container">
          <div className="row">
            <Informations className="col-12 col-xl animate__animated animate__fadeInUp animate__slow">
              <Title>What we Do</Title>
              <Paragraph>
                Fusce massa dolor, mattis sed ultrices ut, placerat ut leo.
                Donec sed fringilla lectus, non vulputate orci. Integer id
                libero euismod, interdum ligula vel, porttitor magna. Sed
                euismod maximus finibus. Pellentesque tempus ultricies nisi at
                cursus. Nulla at nisi tellus. Suspendisse potenti.
              </Paragraph>
            </Informations>

            <div className="col-12 col-xl offset-xl-1">
              <Fade bottom cascade>
                <div className="row">
                  {DoElements.map(({ id, text, icone }, index) => (
                    <Content className="col-12 col-sm-6" key={id}>
                      <Fade key={id} bottom cascade delay={index * 200}>
                        <Icone className={`bi ${icone} `} />
                        <DataText>{text}</DataText>
                      </Fade>
                    </Content>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </Container>
        <Hover />
      </DoSection>
    </React.Fragment>
  )
}

export default Do
