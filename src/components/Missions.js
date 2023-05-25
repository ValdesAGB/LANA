import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

function Missions() {
  const [isVisible, SetIsVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const contactElem = document.getElementById('our-mission')
      const top = contactElem.getBoundingClientRect().top
      if (top < window.innerHeight && top > 0) {
        SetIsVisible(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const MissionsSection = styled.section`
    background-image: url('https://plus.unsplash.com/premium_photo-1673280730980-29f8c149fb1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80');
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
    background-color: rgba(123, 135, 151, 0.7);
  `

  const Paragraph = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `
  console.log(isVisible)
  return (
    <React.Fragment>
      <MissionsSection id="our-mission">
        <Paragraph className="container my-3 ">
          <div className={`col-12 col-xl-6 `}>
            <h2 className="animate__animated animate__fadeInUp animate__fast ">
              Our Mission
            </h2>
            <p className="animate__animated animate__fadeInUp animate__slow">
              Mauris ut sem elementum, tristique velit sed, volutpat mauris. Ut
              interdum nibh sit amet imperdiet condimentum. Nulla sed tellus
              placerat, vehicula risus ac, sollicitudin quam. Quisque pharetra
              porta libero, a sagittis nisl tristique non. Etiam sapien purus,
              cursus eu pulvinar et, tempor sit amet ipsum. Sed a nisl sit amet
              lorem dictum hendrerit.
            </p>
          </div>
        </Paragraph>
        <Div></Div>
      </MissionsSection>
    </React.Fragment>
  )
}

export default Missions
