import { Button, Icon, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { AiOutlineClose } from "react-icons/ai"
import { IconContext } from 'react-icons/lib'
import MyCart from './MyCart/MyCart'
import Recent from './Recent/Recent'
import Wishlist from './Wishlist/Wishlist'
const MainCart = () => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [recentCount, setRecentCount] = useState(0);
    const [display, setDisplay] = useState("");
    const hanldeComponent=(arg)=>{
        setDisplay(arg)
    }
    return (
        <div className={styles.mainCartContainer}>
            <div className={styles.cartNav}>
                <div className={styles.cart_pin}>
                    <Typography variant="body1">
                        Showing Availability At  <input className={styles.cart_Input} />
                        <Button variant="text" style={{ color: 'white' }}>Check</Button>
                        <IconContext.Provider value={{ color: "white" }}>
                            <IconButton style={{ marginLeft: "40px", marginBottom: "20px" }} >
                                <Icon >
                                    <AiOutlineClose size={30} />
                                </Icon>
                            </IconButton>
                        </IconContext.Provider>
                    </Typography>


                </div>
                <div className={styles.cart_menu}>
                    <button className={styles.myButton} onClick={()=>{hanldeComponent("mycart")}} fillColor='red'>MY CART<span>{cartCount > 0 ? cartCount : ""}</span></button>
                    <button className={styles.myButton} onClick={()=>{hanldeComponent("wishlist")}}  variant="text" fillColor='white'>MY WISHLIST<span>{wishlistCount > 0 ? wishlistCount : ""}</span></button>
                    <button className={styles.myButton} onClick={()=>{hanldeComponent("recent")}}  variant="text" fillColor='white' >RECENTLY VIEWED<span>{recentCount > 0 ? recentCount : ""}</span></button>
                </div>
            </div>
            <div className={styles.cart_component}>
                {display==="mycart"?<MyCart cartCount={cartCount} setCartCount={setCartCount}/>:display==="recent"?<Recent recentCount={recentCount} setRecentCount={setRecentCount}/>:display==="wishlist"?<Wishlist wishlistCount={wishlistCount} setWishlistCount={setWishlistCount}/>:""}
            </div>
        </div>
    )
}

export default MainCart