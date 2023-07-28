import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Input = styled.input`
  font-family: ${polices.second};
  color: ${colors.formulaireColor};
  &:focus {
    color: ${colors.formulaireColor};
  }
`

const Textarea = styled.textarea`
  font-family: ${polices.second};
  color: ${colors.formulaireColor};
  &:focus {
    color: ${colors.formulaireColor};
  }
`
const Submit = styled.button`
  font-family: ${polices.second};
  color: white;
  border: none;
  padding: 9px 18px;
  border-radius: 5px;
  background-color: ${colors.formulaireSubmitBgColor};
`
function Formulaire() {
  return (
    <React.Fragment>
      <div className="col-12 col-lg">
        <form className="animate__animated animate__fadeInUp animate__slow">
          <div className="row">
            <div className="mb-3 col-12 col-md-6">
              <Input
                placeholder="Enter your name"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-12 col-md-6">
              <Input
                placeholder="Enter your email"
                type="email"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 col-12">
              <Input
                placeholder="Subject"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-12">
              <Textarea
                className="form-control"
                rows={8}
                placeholder="Your message"
              ></Textarea>
            </div>
          </div>

          <Submit type="submit" onClick={(e) => e.preventDefault()}>
            Send message
          </Submit>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Formulaire
