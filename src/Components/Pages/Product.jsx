import styles from "./Product.module.css";
import React, { useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { metadata } from "../Navbar/metadata";
import { Navbar } from "../Navbar/Navbar";
import ProductItem from "./ProductItem";


export default function Product(){
    let {product, page} = React.useContext(ProductContext);
    const [prodData, setProdData] = React.useState([]);

    // sorting the data
    const [sort, setSort] = useState("");
    const [sortBetween, setSortBetween] = useState("");
    
    
    const [loading, setLoading] = React.useState(true);
    
    useEffect( () => {
        setLoading(true)
        fetch(`https://pepperfry-backend1.herokuapp.com/${product}?_sort=${sort}${sortBetween}`)
        .then( res => res.json() )
        .then( res => {
            setLoading(false)
            setProdData(res) } )
        .catch( err => console.log(err) )
    }, [sort,sortBetween,product])

    console.log("product", product, prodData)
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
                            <div><input type="radio" name="sort" defaultChecked={true} onClick={() => setSort('')}/><label>Relevance</label></div>
                            <div><input type="radio" name="sort" onClick={() => setSort('price&_order=desc')} /><label>Highest Priced First</label></div>
                            <div><input type="radio" name="sort" onClick={() => setSort('price&_order=asc')} /><label>Lowest Priced First</label></div>
                            <div><input type="radio" name="sort" onClick={() => setSort('cashback&_order=desc')} /><label>Highest cashback</label></div>
                            <div><input type="radio" name="sort" onClick={() => setSort('id&_order=desc')} /><label>Newest</label></div>
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
                            <div><input type="checkbox" name="sort" onClick={() => setSortBetween( sortBetween + '&price_lte=15000')} /><label>Under 15,000</label></div>
                            <div><input type="checkbox" name="sort" onClick={() => setSortBetween(sortBetween + '&price_gte=15000&price_lte=40000')} /><label>15,000 to 40,000</label></div>
                            <div><input type="checkbox" name="sort" onClick={() => setSortBetween( sortBetween + '&price_gte=40000&price_lte=65000')} /><label>40,000 to 65,000</label></div>
                        </div>
                    </div>

                   
                </div>

                <div className={styles.right}>
                    {
                        loading ? <img src="/loading.gif" alt="loading" width="200px" height="200px"  style={{margin: "200px auto"}}/> :
                        (
                            prodData?.map( (prod) => <ProductItem prod={prod}/>)
                        )
                    }
                    
                </div>
            </div>
        </div>
        </>
    )
}