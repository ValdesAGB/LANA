import React, { useEffect, useState } from 'react'
import { DoElements } from '../data'
import styled, { keyframes } from 'styled-components'
import { Fade } from 'react-reveal'

function Do() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contactElem = document.getElementById('what-we-do')
      const top = contactElem.getBoundingClientRect().top
      if (top < window.innerHeight && top > 0) {
        setIsVisible(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  `

  const DoSection = styled.section`
    background-image: url('https://images.unsplash.com/photo-1511405889574-b01de1da5441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    padding: 75px 0 75px 0;
  `

  const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(74, 97, 224, 0.8);
  `

  const DoComponent = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `

  const AnimatedSpan = styled.span`
    animation: ${fadeInUp} 0.6s ease forwards;
    animation-delay: ${(props) => props.delay}s;
  `

  const Icone = styled.i`
    @media (max-width: 1024px) {
      font-size: 3em;
    }
    @media (min-width: 1025px) {
      font-size: 2.8em;
  `

  return (
    <React.Fragment>
      <DoSection id="what-we-do">
        <DoComponent className={`container my-5`}>
          <div className="row">
            <div className="col-12 col-xl animate__animated animate__fadeInUp animate__slow">
              <h2>What we Do</h2>
              <p>
                Fusce massa dolor, mattis sed ultrices ut, placerat ut leo.
                Donec sed fringilla lectus, non vulputate orci. Integer id
                libero euismod, interdum ligula vel, porttitor magna. Sed
                euismod maximus finibus. Pellentesque tempus ultricies nisi at
                cursus. Nulla at nisi tellus. Suspendisse potenti.
              </p>
            </div>

            <div className="col-12 col-xl offset-xl-1 mt-3 mt-md-5 mt-xl-0">
              <Fade bottom cascade>
                <span className="row">
                  {DoElements.map(({ id, text, icone }, index) => (
                    <Fade key={id} bottom cascade delay={index * 200}>
                      <span className="col-12 col-md-6 mb-3">
                        <Icone className={`bi ${icone} `} />
                        <p className="fs-4">{text}</p>
                      </span>
                    </Fade>
                  ))}
                </span>
              </Fade>
            </div>
          </div>
        </DoComponent>
        <Div></Div>
      </DoSection>
    </React.Fragment>
  )
}

export default Do
