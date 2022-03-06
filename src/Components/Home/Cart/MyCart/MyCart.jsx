import { Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductAppend from './ProductAppend'
import styles from './styles.module.css'
const MyCart = ({ cartCount, setCartCount }) => {

  return (
    <div className={styles.my_cart}>
      {
        cartCount > 0 ? <div className={styles.productBox}>
          <div>
            <ProductAppend />
          </div>
        </div> : <div className={styles.empty_cart}>
          <img className={styles.empty_cart_img} src="https://www.pepperfry.com/images/svg/empty-cart.svg" alt="" />
          <Typography variant='subtitle1'>Your Shopping Cart Is Empty</Typography>
          <button className={styles.continueButton}>CONTINUE SHOPPING</button>
        </div>
      }
    </div>
  )
}

export default MyCart