import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import {MidComponent} from '../Home/MidComponent';
import Product from '../Pages/Product';
import Carousel from './Carousel/Carousel';
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <MidComponent/>
      <Footer/>
    </div>
  )
}
