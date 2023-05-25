import React, { useEffect, useState } from 'react'
import { ContactElements } from '../data'
import styled from 'styled-components'

function Contact() {
  const [isVisible, SetIsVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const contactElem = document.getElementById('contact')
      const top = contactElem.getBoundingClientRect().top
      if (top < window.innerHeight && top > 0) {
        SetIsVisible(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const ContactSection = styled.section`
    background-image: url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80');
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
    background-color: rgba(62, 93, 220, 0.9);
  `

  const ContactContent = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  `
  return (
    <React.Fragment>
      <ContactSection id="contact">
        <ContactContent className="container my-5">
          <div className="col-12 col-xl-6 mb-5 mb-xl-0 animate__animated animate__fadeInUp animate__slow">
            <h1>Contact Us</h1>
            <p>
              Want to say hello? Want to know more about us? Give us a call or
              drop us an email and we will get back to you as soon as we can.
            </p>
          </div>
          <div className="row ">
            <div className="col-12 col-lg mb-0 mb-md-5 mb-lg-0">
              <span className="row">
                {ContactElements.map(({ id, icone, text }) => (
                  <div
                    className="col-8 col-md-4 col-lg-6 mb-4 animate__animated animate__fadeInUp animate__delay-1s"
                    key={id}
                  >
                    <i className={`bi ${icone} fs-1`} />
                    <p>{text}</p>
                  </div>
                ))}
              </span>
            </div>

            <div className="col-12 col-lg">
              <form className="animate__animated animate__fadeInUp animate__slow">
                <div className="row">
                  <div className="mb-3 col-12 col-md-6">
                    <input
                      placeholder="Enter your name"
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3 col-12 col-md-6">
                    <input
                      placeholder="Enter your email"
                      type="email"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 col-12">
                    <input
                      placeholder="Subject"
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3 col-12">
                    <textarea
                      className="form-control"
                      rows={8}
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => e.preventDefault()}
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </ContactContent>
        <Div></Div>
      </ContactSection>
    </React.Fragment>
  )
}

export default Contact
