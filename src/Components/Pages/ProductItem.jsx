import styles from "./Product.module.css";
import { BsHeart } from 'react-icons/bs';
import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ProductContext } from "../../Context/ProductContext";

export default function ProductItem({ prod }) {
    const [showCartBtn, setShowCartBtn] = useState(false);
    const [liked, setLiked] = useState(false);
    const { handleOpencart, handleWishlistRemove, handleCart, handleWishlist, Auth
    } = React.useContext(ProductContext)
    return (
        <div onMouseOver={() => setShowCartBtn(true)} onMouseLeave={() => setShowCartBtn(false)}>
            <div>
                <img width="100%" height="400px" src={prod.image} />
                {liked ? <FavoriteIcon className={styles.wishlisted} onClick={() => {
                    setLiked(false);
                    handleWishlistRemove(prod.id)
                }
                } /> : <BsHeart className={styles.wishlist} onClick={() => {
                    setLiked(true);
                    handleWishlist(prod)
                }
                } />}
                {showCartBtn && <button className={styles.cartBtn} onClick={
                    async () => {
                        await handleCart(prod)
                        Auth ? (handleOpencart("mycart")) : alert("Please Login First")          
                    }          
                }>Add To Cart</button>}
            </div>
            <div>
                <p className={styles.dis}>{prod.name}</p>
                <p>{prod.brand}</p>
                <p className={styles.price}>$ {prod.price} <span className={styles.org}>${prod.mrp}</span></p>
                <h3 className={styles.diss}>{prod.discount}</h3>
                <p className={styles.p}>Earn cashback <span className={styles.bold}>$ {prod.cashback}</span></p>
                <p className={styles.p}>Ships in <span className={styles.bold}>{prod.ship}</span></p>
            </div>
        </div >
    )
}