import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import {MidComponent} from '../Home/MidComponents/MidComponent';
import Carousel from './Carousel/Carousel';
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <MidComponent/>
    </div>
  )
}
