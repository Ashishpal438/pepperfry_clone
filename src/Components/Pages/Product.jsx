import styles from "./Product.module.css";
import { BsHeart } from 'react-icons/bs';
import React, { useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";

export default function Product(){
    let {product, page} = React.useContext(ProductContext);
    const [prodData, setProdData] = React.useState([]);
    
    useEffect( () => {
        fetch(`https://pepperfry-backend1.herokuapp.com/${product}`)
        .then( res => res.json() )
        .then( res => setProdData(res) )
        .catch( err => console.log(err) )
    }, [])
    return (
        <div >
            <div className={styles.cont}>
                <h1 style={{textAlign: "center", marginTop: "2rem"}}>{product}</h1>
                <h3 tyle={{textAlign: "center"}}>{page}</h3>
            </div>

            <div className={styles.main}>
                <div className={styles.left}>
                    <div>
                        <h4>Sort by</h4>

                        <div className={styles.catego}>
                            <div><input type="radio" name="sort"/><label>Relevance</label></div>
                            <div><input type="radio" name="sort"/><label>Highest Priced First</label></div>
                            <div><input type="radio" name="sort"/><label>Lowest Priced Firs</label></div>
                            <div><input type="radio" name="sort"/><label>Fastest Shipping</label></div>
                            <div><input type="radio" name="sort"/><label>Newest</label></div>
                        </div>
                    </div>

                    <div>
                        <h4>Brand</h4>
                    </div>

                    <div>
                        <h4>Price</h4>
                    </div>

                    <div>
                        <h4>Dimension</h4>
                    </div>

                    <div>
                        <h4>Primary Material</h4>
                    </div>

                    <div>
                        <h4>Arm Type</h4>
                    </div>

                    <div>
                        <h4>Discount</h4>
                    </div>
                </div>

                <div className={styles.right}>
                    {
                        prodData?.map( (prod) => (
                            <div>
                                <div>
                                    <img width="100%" height="400px" src={prod.image} />
                                    <BsHeart className={styles.wishlist}/>
                                    <button className={styles.cartBtn}>Add To Cart</button>
                                </div>
                                <div>
                                    <p className={styles.dis}>{prod.name}</p>
                                    <p>{prod.brand}</p>
                                    <p className={styles.price}>$ {prod.price} <span className={styles.org}>${prod.mrp}</span></p>
                                    <p className={styles.p}>Earn cashback <span className={styles.bold}>$ {prod.cashback}</span></p>
                                    <p className={styles.p}>Ships in <span className={styles.bold}>{prod.ship}</span></p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}