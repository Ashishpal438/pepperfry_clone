import styles from "./Product.module.css";
import { BsHeart } from 'react-icons/bs';

export default function Product(){
    return (
        <div >
            <div className={styles.cont}>
                <h2 style={{textAlign: "center"}}>chair</h2>
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
                    <div>
                        <div>
                            <img width="100%" height="400px" src="https://ii2.pepperfry.com/media/catalog/product/n/e/494x544/new-york-high-back-ergonomic-chair-with-headrest-in-black-colour-by-green-soul-new-york-high-back-er-fmfcwj.jpg" />
                            <BsHeart className={styles.wishlist}/>
                            <button className={styles.cartBtn}>Add To Cart</button>
                        </div>
                        <div>
                            <p className={styles.dis}>New York High Back Ergonomic Chair with Headrest in Black Colour</p>
                            <p>Green Soul</p>
                            <p className={styles.price}>$ 8, 490 <span className={styles.org}>$18,000</span></p>
                            <p className={styles.p}>Earn cashback <span className={styles.bold}>$ 2123</span></p>
                            <p className={styles.p}>Ships in <span className={styles.bold}>1 day</span></p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img width="100%" height="400px" src="https://ii2.pepperfry.com/media/catalog/product/n/e/494x544/new-york-high-back-ergonomic-chair-with-headrest-in-black-colour-by-green-soul-new-york-high-back-er-fmfcwj.jpg" />
                            <BsHeart className={styles.wishlist}/>
                            <button className={styles.cartBtn}>Add To Cart</button>
                        </div>
                        <div>
                            <p className={styles.dis}>New York High Back Ergonomic Chair with Headrest in Black Colour</p>
                            <p>Green Soul</p>
                            <p className={styles.price}>$ 8, 490 <span className={styles.org}>$18,000</span></p>
                            <p className={styles.p}>Earn cashback <span className={styles.bold}>$ 2123</span></p>
                            <p className={styles.p}>Ships in <span className={styles.bold}>1 day</span></p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img width="100%" height="400px" src="https://ii2.pepperfry.com/media/catalog/product/n/e/494x544/new-york-high-back-ergonomic-chair-with-headrest-in-black-colour-by-green-soul-new-york-high-back-er-fmfcwj.jpg" />
                            <BsHeart className={styles.wishlist}/>
                            <button className={styles.cartBtn}>Add To Cart</button>
                        </div>
                        <div>
                            <p className={styles.dis}>New York High Back Ergonomic Chair with Headrest in Black Colour</p>
                            <p>Green Soul</p>
                            <p className={styles.price}>$ 8, 490 <span className={styles.org}>$18,000</span></p>
                            <p className={styles.p}>Earn cashback <span className={styles.bold}>$ 2123</span></p>
                            <p className={styles.p}>Ships in <span className={styles.bold}>1 day</span></p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img width="100%" height="400px" src="https://ii2.pepperfry.com/media/catalog/product/n/e/494x544/new-york-high-back-ergonomic-chair-with-headrest-in-black-colour-by-green-soul-new-york-high-back-er-fmfcwj.jpg" />
                            <BsHeart className={styles.wishlist}/>
                            <button className={styles.cartBtn}>Add To Cart</button>
                        </div>
                        <div>
                            <p className={styles.dis}>New York High Back Ergonomic Chair with Headrest in Black Colour</p>
                            <p>Green Soul</p>
                            <p className={styles.price}>$ 8, 490 <span className={styles.org}>$18,000</span></p>
                            <p className={styles.p}>Earn cashback <span className={styles.bold}>$ 2123</span></p>
                            <p className={styles.p}>Ships in <span className={styles.bold}>1 day</span></p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}