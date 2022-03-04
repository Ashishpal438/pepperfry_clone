import styles from "./Product.module.css";
import React, { useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { metadata } from "../Navbar/metadata";
import { Navbar } from "../Navbar/Navbar";
import ProductItem from "./ProductItem";

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
        <>
        <Navbar/>
        <div >
            <div className={styles.cont}>
                <h1 style={{textAlign: "center", marginTop: "2rem", fontSize:"3rem"}}>{product}</h1>
                <h3 style={{textAlign: "center", marginTop: "2rem"}}>{page}</h3>
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
                        <div className={styles.catego}>
                            {
                                metadata[product]?.brands.map( (brand) => (<div><input type="checkbox" name="sort"/><label>{brand}</label></div>) )
                            }
                            
                        </div>
                    </div>

                    <div>
                        <h4>Price</h4>
                        <div className={styles.catego}>
                            <div><input type="checkbox" name="sort"/><label>Under 5,000</label></div>
                            <div><input type="checkbox" name="sort"/><label>5,000 to 10,000</label></div>
                            <div><input type="checkbox" name="sort"/><label>10,000 to 15,000</label></div>
                        </div>
                    </div>

                   
                </div>

                <div className={styles.right}>
                    {
                        prodData?.map( (prod) => <ProductItem prod={prod}/>)
                    }
                    
                </div>
            </div>
        </div>
        </>
    )
}