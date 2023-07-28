import React from 'react'
import { ContactElements } from '../data'
import styled from 'styled-components'
import { useContext } from 'react'
import { BackgroundContext } from '../untils/context'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'
import Formulaire from './Formulaire'
import Coordonnees from './Coordonnees'

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

const Head = styled.div`
  margin-bottom: 2.5rem;
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
  'https://preview.erilisdesign.com/html/lana/assets/images/image-14.jpg'

function Contact() {
  const { back } = useContext(BackgroundContext)

  const ContactSection = styled.section`
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
    background-color: ${colors.homeHoverBgColor};
    opacity: ${back ? '0' : '0.9'};
  `

  return (
    <React.Fragment>
      <ContactSection id="contact">
        <Container className="container">
          <Head className="col-12 col-xl-6 animate__animated animate__fadeInUp animate__slow">
            <Title>Contact Us</Title>
            <Paragraph>
              Want to say hello? Want to know more about us? Give us a call or
              drop us an email and we will get back to you as soon as we can.
            </Paragraph>
          </Head>
          <div className="row ">
            <Coordonnees array={ContactElements} />
            <Formulaire />
          </div>
        </Container>
        <Hover />
      </ContactSection>
    </React.Fragment>
  )
}

export default Contact
