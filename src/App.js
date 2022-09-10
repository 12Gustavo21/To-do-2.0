import React from 'react'
import Header from './Header/index'
import Main from './Main/Index'
import Footer from './Footer/index'
import { GlobalStyle } from './Global/style'

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
