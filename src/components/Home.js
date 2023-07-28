import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { BackgroundContext } from '../untils/context'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const bgCover =
  'https://preview.erilisdesign.com/html/lana/assets/images/image-12.jpg'

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  color: white;
`

const Title = styled.h1`
  font-family: ${polices.main};
  margin-bottom: 1rem;
  font-size: 30px;

  @media (min-width: 992px) {
    font-size: 40px;
  }
`
const SubTitle = styled.h5`
  font-size: 16px;
  font-weight: 300;
  font-family: ${polices.second};
  margin-bottom: 40px;
  line-height: 1.6;
`

const LearnBtn = styled.a`
  font-family: ${polices.second};
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  background-color: white;
  color: black;
  transition: background-color 0.5s, color 0.6s 0.2s;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

function Home() {
  const { back } = useContext(BackgroundContext)

  const Section = styled.section`
    background-image: url(${back ? '' : bgCover});
    background-size: cover;
    background-position: center;
    position: relative;

    padding: 50% 0;

    @media (min-width: 480px) {
      padding: 40% 0;
    }

    @media (min-width: 576px) {
      padding: 30% 0;
    }

    @media (min-width: 992px) {
      padding: 25% 0;
    }

    @media (min-width: 1200px) {
      padding: 23% 5%;
    }

    @media (min-width: 1330px) {
      padding: 15% 5%;
    }

    @media (min-width: 1400px) {
      padding: 25% 5%;
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
      <Section>
        <Container className="container">
          <div className="row">
            <div className="col-12 col-lg-9 col-xl-6">
              <Title className="animate__animated animate__fadeInUp animate__slow">
                We build beautiful digital experiences
              </Title>
              <SubTitle className=" animate__animated animate__fadeInUp animate__slow">
                A beautiful and easy to use template that lets you create the
                perfect website for your future agency or business.
              </SubTitle>
              <div className="animate__animated animate__fadeInUp animate__fast animate__delay-1s">
                <LearnBtn>Learn more</LearnBtn>
              </div>
            </div>
          </div>
        </Container>
        <Hover />
      </Section>
    </React.Fragment>
  )
}

export default Home
