import {  Typography } from '@mui/material'
import React,{ useState } from 'react'
import { BsGrid3X3 } from 'react-icons/bs'
import { MdOutlineTableRows } from 'react-icons/md'
import ProductAppend from './ProductAppend'
import styles from './styles.module.css'
const MyCart = ({cartCount,setCartCount}) => {
  
  return (
    <div>
      {
        cartCount=== 0 ? <div className={styles.productBox}>
        {/* <div className={styles.displayProduct}>
          <BsGrid3X3 size={30} sx={{cursor:"pointer"}} onClick={()=>{setDisp("grid")}}/>
          <MdOutlineTableRows size={30} onClick={()=>{setDisp("flex")}}/>
        </div> */}
        <div>
        <ProductAppend/>
        </div>
        </div>:<div className={styles.empty_cart}>
          <img className={styles.empty_cart_img} src="https://www.pepperfry.com/images/svg/empty-cart.svg" alt=""/>
          <Typography variant='subtitle1'>Your Shopping Cart Is Empty</Typography>
          <button className={styles.continueButton}>CONTINUE SHOPPING</button>
        </div>
      }
    </div>
  )
}

export default MyCart