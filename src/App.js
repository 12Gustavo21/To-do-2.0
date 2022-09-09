import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import {GlobalStyle} from './styles/global-style'

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Main />
      <Footer />
    </>
  )
}
