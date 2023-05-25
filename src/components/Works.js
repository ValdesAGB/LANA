import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { WorksElements } from '../data'

function Works() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactElem = document.getElementById('our-works')
      const top = contactElem.getBoundingClientRect().top
      if (top < window.innerHeight && top > 0) {
        setIsVisible(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const WorksSection = styled.section`
    background-image: url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    padding: 50px 0 50px 0;
  `

  const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(144, 154, 168, 0.8);
  `

  const SolutionsContent = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `
  const Image = styled.img`
    height: 300px;
  `

  const ImageLeft = (id, href, cover, title, text) => {
    return (
      <>
        <>
          <div className="col-12 col-lg-7  d-lg-none">
            <a href={href}>
              <Image src={cover} alt="1" className="w-100" />
            </a>
          </div>
          <div className="col-12 col-lg mt-3 mt-lg-0  d-lg-none">
            <h2>{title}</h2>
            <h5 className="fw-light">{text}</h5>
          </div>
        </>

        <>
          <div className="col-12 col-lg mt-3 mt-lg-0 text-end d-lg-block d-none ">
            <h2>{title}</h2>
            <h5 className="fw-light">{text}</h5>
          </div>
          <div className="col-12 col-lg-7 d-lg-block d-none ">
            <a href={href}>
              <Image src={cover} alt="1" className="w-100" />
            </a>
          </div>
        </>
      </>
    )
  }
  return (
    <React.Fragment>
      <WorksSection id="our-works">
        <SolutionsContent className={`container my-5 `}>
          <div className="mb-5 animate__animated animate__fadeInUp animate__slow">
            <h1>Our Work</h1>
            <p>
              Donec sollicitudin libero vitae massa placerat tempor. Duis rutrum
              nisl eu ipsum varius, nec feugiat tortor vulputate. Integer
              pellentesque leo id metus dictum, a tristique tellus faucibus.
            </p>
          </div>

          <div className="row justify-content-center animate__animated animate__fadeInUp animate__slow">
            {WorksElements.map(({ id, cover, title, text, left, href }) =>
              !left ? (
                <div
                  className="row  align-items-center  mb-5 col-12 col-lg-11"
                  key={id}
                >
                  <div className="col-12 col-lg-7">
                    <a href={href}>
                      <Image src={cover} alt="1" className="w-100" />
                    </a>
                  </div>
                  <div className="col-12 col-lg mt-3 mt-lg-0">
                    <h2>{title}</h2>
                    <h5 className="fw-light">{text}</h5>
                  </div>
                </div>
              ) : (
                <div
                  className="row align-items-center  mb-5 col-12 col-lg-11"
                  key={id}
                >
                  {ImageLeft(id, href, cover, title, text)}
                </div>
              )
            )}
          </div>
        </SolutionsContent>
        <Div></Div>
      </WorksSection>
    </React.Fragment>
  )
}

export default Works
