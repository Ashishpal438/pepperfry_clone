import { Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './styles.module.css'
import WishlistProduct from './WishlistProduct';
import { BsGrid3X3 } from "react-icons/bs";
import { MdOutlineTableRows } from "react-icons/md"
const Wishlist = ({ wishlistCount, setWishlistCount, }) => {
  const [disp, setDisp] = useState("flex")
  return (
    <div>
      {
        wishlistCount === 0 ? <div className={styles.productBox}>
          <div className={styles.displayProduct}>
            <BsGrid3X3 size={30} onClick={()=>{setDisp("grid")}}/>
            <MdOutlineTableRows size={30} onClick={()=>{setDisp("flex")}}/>
          </div>
          <div className={disp==="flex"?styles.productFlex:styles.productGrid}>
          <WishlistProduct />
          </div>
        </div> : <div className={styles.empty_cart}>
          <img className={styles.empty_cart_img} src="https://www.pepperfry.com/images/svg/empty-wishlist.svg" alt="" />
          <Typography variant='subtitle1'>You Haven't Added Any Item
            To Your Wishlist</Typography>
          <button className={styles.continueButton}>Start Wishing<span>&#128516;</span></button>
        </div>
      }
    </div>
  )
}

export default Wishlist
//https://www.pepperfry.com/images/svg/empty-wishlist.svg