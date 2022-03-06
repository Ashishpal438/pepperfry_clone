import styles from "./Product.module.css";
import { BsHeart } from 'react-icons/bs';
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function ProductItem({prod}){
    const [showCartBtn, setShowCartBtn] = useState(false);
    const [liked, setLiked] = useState(false);

    const addToCart = (prod) => {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(prod)
        }

        fetch("https://pepperfry-backend1.herokuapp.com/cart", config)
        .then(res => console.log(res) )
        .catch(err => console.log(err));
    }

    const addToWishlist = (prod) => {
        setLiked(true);

        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(prod)
        }

        fetch("https://pepperfry-backend1.herokuapp.com/wishlist", config)
        .then(res => console.log(res) )
        .catch(err => console.log(err));
    }

    const deletefromWishlist = (id) => {
        setLiked(false);
        fetch(`https://pepperfry-backend1.herokuapp.com/wishlist/${id}`, { method: 'DELETE' })
        .then(res => console.log(res) )
        .catch(err => console.log(err));
    }
    return (
        <div onMouseOver={() => setShowCartBtn(true)} onMouseLeave={() => setShowCartBtn(false)}>
            <div>
                <img width="100%" height="400px" src={prod.image} />
                {liked ? <FavoriteIcon className={styles.wishlisted} onClick={() => deletefromWishlist(prod.id)} /> :  <BsHeart className={styles.wishlist} onClick={() => addToWishlist(prod)}/> }
                {showCartBtn && <button className={styles.cartBtn} onClick={ () => addToCart(prod)}>Add To Cart</button>}
            </div>
            <div>
                <p className={styles.dis}>{prod.name}</p>
                <p>{prod.brand}</p>
                <p className={styles.price}>$ {prod.price} <span className={styles.org}>${prod.mrp}</span></p>
                <h3 className={styles.diss}>{prod.discount}</h3>
                <p className={styles.p}>Earn cashback <span className={styles.bold}>$ {prod.cashback}</span></p>
                <p className={styles.p}>Ships in <span className={styles.bold}>{prod.ship}</span></p>
            </div>
        </div>
)
}