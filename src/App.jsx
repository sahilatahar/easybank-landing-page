import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import Articles from './components/Articles/Articles'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Articles />
      <Footer />
    </>
  )
}

export default App