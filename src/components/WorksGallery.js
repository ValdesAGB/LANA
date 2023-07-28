import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'

const Container = styled.div`
  margin-bottom: ${(props) => (props.id === 'Golden' ? '0' : '3rem')};
`

const Informations = styled.div`
  @media (min-width: 992px) {
    text-align: ${(props) => (props.side === true ? 'right' : 'left')};
  }
`

const Title = styled.h4`
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-family: ${polices.main};
  font-size: 1.5rem;
  @media (min-width: 992px) {
    font-size: 1.75rem;
  }
`

const SubTitle = styled.p`
  font-family: ${polices.second};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
`

const CoverContainer = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
`

const Cover = styled.img`
  width: 100%;
`

function WorksGallery({ id, href, cover, title, text, left }) {
  return (
    <React.Fragment>
      {!left ? (
        <Container id={id} className="row align-items-center col-12 col-xl-11">
          <CoverContainer className="col-12 col-lg-7 p-0">
            <a href={href}>
              <Cover src={cover} alt={title} />
            </a>
          </CoverContainer>
          <Informations side={left} className="col-12 col-lg">
            <Title>{title}</Title>
            <SubTitle>{text}</SubTitle>
          </Informations>
        </Container>
      ) : (
        <Container id={id} className="row align-items-center col-12 col-xl-11">
          <Informations
            side={left}
            className="col-12 col-lg order-1 order-lg-0"
          >
            <Title>{title}</Title>
            <SubTitle>{text}</SubTitle>
          </Informations>
          <CoverContainer className="col-12 col-lg-7 p-0 order-0 order-lg-1">
            <a href={href}>
              <Cover src={cover} alt={title} />
            </a>
          </CoverContainer>
        </Container>
      )}
    </React.Fragment>
  )
}

export default WorksGallery
