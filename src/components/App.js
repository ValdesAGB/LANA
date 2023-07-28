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
import { BackgroundProvider } from '../untils/context'
import Button from './Button'
import BgRecode from './BgRecode'
import { polices } from '../untils/polices'

const GlobalStyle = createGlobalStyle`
*{
  font-family:${polices.main};
}
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BackgroundProvider>
        <Button />
        <Header />
        <main className="row">
          <BgRecode />
          <Home />
          <Missions />
          <Do />
          <Solutions />
          <Works />
          <Contact />
        </main>
        <Footer />
        <Networks />
      </BackgroundProvider>
    </React.Fragment>
  )
}

export default App
