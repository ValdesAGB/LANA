import React, { useEffect, useState } from 'react'
import { SolutionsElements } from '../data'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

function Solutions() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const solutionsElem = document.getElementById('our-solutions')
      const top = solutionsElem.getBoundingClientRect().top
      const bottom = solutionsElem.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight

      // Vérifie si l'élément est visible dans la fenêtre
      if (top < windowHeight && bottom > 0) {
        setIsVisible(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const SolutionsSection = styled.section`
    background-image: url('https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=362&q=80');
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
    background-color: rgba(118, 136, 151, 0.7);
  `

  const SolutionsContent = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `
  return (
    <React.Fragment>
      <SolutionsSection id="our-solutions">
        <SolutionsContent className={`container my-5`}>
          <div className="col-12 col-xl-6 animate__animated animate__fadeInUp animate__slow">
            <h3>A complete marketing solution</h3>
            <p>
              Mauris ut sem elementum, tristique velit sed, volutpat mauris. Ut
              interdum nibh sit amet imperdiet condimentum. Nulla sed tellus
              placerat, vehicula risus ac, sollicitudin quam. Quisque pharetra
              porta libero, a sagittis nisl tristique non
            </p>
          </div>
          <Fade bottom cascade>
            <div className="row">
              {SolutionsElements.map(({ id, title, text }, index) => (
                <Fade key={id} bottom cascade delay={index * 250}>
                  <div key={id} className="col-12 col-lg-6 my-3 ">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </Fade>
        </SolutionsContent>
        <Div></Div>
      </SolutionsSection>
    </React.Fragment>
  )
}

export default Solutions
