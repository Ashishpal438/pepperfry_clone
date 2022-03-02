import React from 'react'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { MidComponent } from './MidComponent'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <MidComponent/>
      <Footer/>
    </div>
  )
}
