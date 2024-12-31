import React from 'react'
import Navbar from './components/Navbar'
import "./index.css"
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'

const App = () => {
  return (
    <div className='allcontent'>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Hero3/>
    </div>
  )
}

export default App
