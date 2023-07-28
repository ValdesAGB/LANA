import React from 'react'
import { SolutionsElements } from '../data'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { useContext } from 'react'
import { BackgroundContext } from '../untils/context'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const SolutionsContent = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

const Head = styled.div`
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

const Solution = styled.div`
  margin-bottom: ${(props) => (props.ids === 'We-innovate' ? '0' : '3rem')};
  @media (min-width: 992px) {
    margin-bottom: ${(props) =>
      props.ids === 'We-innovate' || props.ids === 'We-deliver' ? '0' : '3rem'};
  }
`

const SolutionTitle = styled.h4`
  font-family: ${polices.main};
  font-weight: 400;
  font-size: 1.375rem;
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`

const SolutionParagraph = styled.p`
  font-family: ${polices.second};
  font-size: 1rem;
`

const bgCover =
  'https://preview.erilisdesign.com/html/lana/assets/images/image-3.jpg'

function Solutions() {
  const { back } = useContext(BackgroundContext)

  const SolutionsSection = styled.section`
    background-image: url(${back ? '' : bgCover});
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    padding: 5rem 0;
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
    background-color: ${colors.missionsHoverBgColor};
    opacity: ${back ? '0' : '0.9'};
  `

  return (
    <React.Fragment>
      <SolutionsSection id="our-solutions">
        <SolutionsContent className="container">
          <Head className="col-12 col-xl-6 animate__animated animate__fadeInUp animate__slow">
            <Title>A complete marketing solution</Title>
            <Paragraph>
              Mauris ut sem elementum, tristique velit sed, volutpat mauris. Ut
              interdum nibh sit amet imperdiet condimentum. Nulla sed tellus
              placerat, vehicula risus ac, sollicitudin quam. Quisque pharetra
              porta libero, a sagittis nisl tristique non
            </Paragraph>
          </Head>
          <Fade bottom cascade>
            <div className="row">
              {SolutionsElements.map(({ id, title, text }, index) => (
                <Solution key={id} ids={id} className="col-12 col-lg-6">
                  <Fade key={id} bottom cascade delay={index * 250}>
                    <SolutionTitle>{title}</SolutionTitle>
                    <SolutionParagraph>{text}</SolutionParagraph>
                  </Fade>
                </Solution>
              ))}
            </div>
          </Fade>
        </SolutionsContent>
        <Hover />
      </SolutionsSection>
    </React.Fragment>
  )
}

export default Solutions
