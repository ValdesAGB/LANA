import React from 'react'
import { FooterElements } from '../data'
import styled from 'styled-components'

function Footer() {
  const date = new Date()
  const ListLink = styled.a`
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
    text-decoration: none;
    transition: color 400ms;
    &:hover {
      color: #f03c6f;
    }
  `
  return (
    <React.Fragment>
      <footer className="bg-dark row text-white">
        <div className="py-5">
          <div className="row justify-content-center">
            <ul className="list-unstyled col-10  col-md-5 col-lg-3 row">
              {FooterElements.map(({ id, icone, href }) => (
                <li key={id} className="col " title={id}>
                  <ListLink href="#">
                    <i className={`bi ${icone}  text-white`} />
                  </ListLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center my-2">
            <h6>
              &copy; {date.getFullYear()} Lana - All Rights Reserved -{' '}
              <a href="#1" className="text-white text-decoration-none">
                Terms of Service
              </a>
            </h6>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
