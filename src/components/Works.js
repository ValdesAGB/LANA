import React from 'react'
import styled from 'styled-components'
import { WorksElements } from '../data'
import { useContext } from 'react'
import { BackgroundContext } from '../untils/context'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'
import WorksGallery from './WorksGallery'

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

const bgCover =
  'https://preview.erilisdesign.com/html/lana/assets/images/image-13.jpg'

function Works() {
  const { back } = useContext(BackgroundContext)

  const WorksSection = styled.section`
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
      <WorksSection id="our-works">
        <SolutionsContent className="container">
          <Head className="col-xl-6 animate__animated animate__fadeInUp animate__slow">
            <Title>Our Work</Title>
            <Paragraph>
              Donec sollicitudin libero vitae massa placerat tempor. Duis rutrum
              nisl eu ipsum varius, nec feugiat tortor vulputate. Integer
              pellentesque leo id metus dictum, a tristique tellus faucibus.
            </Paragraph>
          </Head>

          <div className="row justify-content-center animate__animated animate__fadeInUp animate__slow">
            {WorksElements.map(({ id, cover, title, text, left, href }) => (
              <WorksGallery
                id={id}
                href={href}
                cover={cover}
                title={title}
                text={text}
                left={left}
                key={id}
              />
            ))}
          </div>
        </SolutionsContent>
        <Hover />
      </WorksSection>
    </React.Fragment>
  )
}

export default Works
