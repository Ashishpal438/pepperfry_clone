import styles from './Checkout.module.css';
import { VscLocation } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';

export default function Checkout() {
      const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [cartValue, setCartValue] = useState(0);
    const [discountValue, setDiscountValue] = useState(0);
    const [check, setcheck] = useState(0);
    const [quantityAction, setQuantityAction] = useState(0);

    const checkoutPrice = () => {
        let sum = 0;
        let actualSum = 0;
        for (let item of cart) {
            console.log("@@@@", item)
            sum += Number(item.mrp.split(",").join(""));
            actualSum += Number(item.price);
        }
        console.log("====", cartValue, discountValue)
        setCartValue(sum);
        setDiscountValue(actualSum);
    }
    const fetchData = () => {
        fetch("https://pepperfry-backend1.herokuapp.com/cart")
            .then(res => res.json())
            .then(res => setCart(res))
            .then(res => checkoutPrice())
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData();
    }, [])

    const deleteItem = (id) => {
        fetch(`https://pepperfry-backend1.herokuapp.com/cart/${id}`, { method: "DELETE" })
            .then(res => fetchData())
            .catch(err => console.log(err));
    }
    const moveItem = (item) => {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }

        fetch("https://pepperfry-backend1.herokuapp.com/wishlist", config)
            .then(res => deleteItem(item.id))
            .catch(err => console.log(err));

    }

    const handleChecked = (e) => {
        let { checked } = e.target;
        checked ? setcheck(99) : setcheck(0);
    }

    return (
        <div className={styles.cont}>
            <div><h3 className={styles.h1}>IN YOUR CART <span className={styles.span}>({cart.length} items)</span></h3></div>

            <div className={styles.prodCont}>
                <div className={styles.left}>
                    <div className={styles.pin}>
                        <h3 className={styles.h3}>
                            <span style={{ display: "inline-block", fontSize: "1.5rem", marginRight: "0.4rem" }}> <VscLocation /></span>
                            Enter Your Pincode For Delivery & Assembly Information
                        </h3>
                        <div className={styles.pinInput}>
                            <input type="text" placeholder='Pincode' />
                            <button>GO</button>
                        </div>
                    </div>

                    <div >
                        {
                            cart?.map((item, ind) => <CartItem item={item} key={ind} deleteItem={deleteItem} moveItem={moveItem} />)
                        }
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.div}>
                        <div>Cart <span>₹ {cartValue}</span></div>
                        <div>Retail Discount <span> ₹ {cartValue - discountValue}</span></div>
                        <div>GiveIndia <span>₹{check}</span></div>
                        <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>Delivery and Assembly Charges Extra. Enter Pincode To Know</p>
                    </div>

                    <div className={styles.div}>
                        <div>Total<span>₹ {discountValue + check}</span></div>
                    </div>

                    <div className={styles.div}>
                        No Cost EMI Available Starting ₹ 3,185/month. EMI Starting ₹ 900/month
                    </div>

                    <div className={styles.subDiv}>
                        <input type="checkbox" name='gov' onChange={(e) => handleChecked(e)} /><label>Contribute Rs.99 For COVID Relief Through GiveIndia.</label>
                    </div>

                    <button className={styles.btn} onClick={() => navigate('/')} >PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

