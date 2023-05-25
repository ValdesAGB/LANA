import React from 'react'
import Header from './Header'
import { createGlobalStyle } from 'styled-components'
import Home from './Home'
import Missions from './Missions'
import Do from './Do'
import Solutions from './Solutions'
import Works from './Works'
import Contact from './Contact'
import Footer from './Footer'
import Networks from './Networks'

function App() {
  const GlobalStyle = createGlobalStyle`
  *{

    font-family:Montserrat;
  }
  `
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main className="row">
        <Home />
        <Missions />
        <Do />
        <Solutions />
        <Works />
        <Contact />
      </main>
      <Footer />
      <Networks />
    </React.Fragment>
  )
}

export default App
