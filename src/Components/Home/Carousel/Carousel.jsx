import { sliderUnstyledClasses } from '@mui/base'
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import slider from './slider.js'
const Carousel = () => {
  useEffect(()=>{
    slider();
  },[])
  return (
    <div className={styles.mainCarousel}>
      <div className={styles.Carousel}>
        <div className={styles.SliderCarousel}>
        <img id='carousel_first_img' src="https://ii1.pepperfry.com/media/wysiwyg/banners/Promo_Web_2X_03032022_nd.jpg" alt="Slider Image" width="100%" />
        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/HB-04_2154x1050_04032022.jpg" alt="Slider Image" width="100%" />
        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB-02_2154x1050_04032022.jpg" alt="Slider Image" width="100%" />
        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/HB-03_2154x1050_04032022.jpg" alt="Slider Image" width="100%" />
        </div>
      <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Scandinavian_RHS_02032022.gif" alt="" width="100%" />
      </div>
      <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_09022022.jpg" alt="" width="100%"/>
    </div>
  )
}

export default Carousel
