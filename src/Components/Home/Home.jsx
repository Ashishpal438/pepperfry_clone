import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import {MidComponent} from '../Home/MidComponent';
export const Home = () => {
  return (
    <div>
      <Navbar/>
      
      <MidComponent/>
      <Footer/>
    </div>
  )
}
