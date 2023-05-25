import React from 'react'
import styled from 'styled-components'

function Home() {
  const Section = styled.section`
    background-image: url('https://images.unsplash.com/photo-1616141893496-fbc65370493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
  `

  const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(68, 97, 226, 0.7);
  `

  const Section2 = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `
  const LearnBtn = styled.a`
    padding: 10px 30px 10px 30px;
    margin: 0 50px 0 0;
    border-radius: 10px;
    background-color: white;
    color: black;
    transition: background-color 500ms, color 800ms;
    &:hover {
      color: white;
      background-color: rgba(0, 0, 0, 0.8);
    }
  `

  const H5 = styled.h5`
    font-size: 1em;
    font-weight: 300;
  `

  return (
    <React.Fragment>
      <Section className=" py-md-5 ">
        <div className="container my-5  py-md-5">
          <Section2 className="text-white row ">
            <span className="col-12  col-lg-8 col-xl-6  my-5">
              <h1 className="animate__animated animate__fadeInUp animate__slow">
                We build beautiful digital experiences
              </h1>
              <H5 className="my-3 animate__animated animate__fadeInUp animate__slow">
                A beautiful and easy to use template that lets you create the
                perfect website for your future agency or business.
              </H5>
              <div className="my-5 animate__animated animate__fadeInUp animate__fast animate__delay-1s">
                <LearnBtn className="btn">Learn more</LearnBtn>
              </div>
            </span>
          </Section2>
        </div>
        <Div></Div>
      </Section>
    </React.Fragment>
  )
}

export default Home
