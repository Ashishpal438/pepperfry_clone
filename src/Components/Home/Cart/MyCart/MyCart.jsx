import { Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
const MyCart = ({cartCount,setCartCount}) => {

  return (
    <div>
      {
        cartCount>0?<></>:<div className={styles.empty_cart}>
          <img src="https://www.pepperfry.com/images/svg/empty-cart.svg" alt="" />
          <Typography variant='subtitle1'>Your Shopping Cart Is Empty</Typography>
          <button className={styles.continueButton}>CONTINUE SHOPPING</button>
        </div>
      }
    </div>
  )
}

export default MyCart
