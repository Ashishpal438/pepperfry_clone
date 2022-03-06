import styles from './Checkout.module.css';
import { BsHeart } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import {VscCalendar} from 'react-icons/vsc'
import { useState } from 'react';

export default function CartItem({item, deleteItem, moveItem}){
    const [quantity, setQuantity] = useState(1);
    const [mrp, setMrp] = useState(Number(item.mrp.split(",").join("")));
    const [price, setPrice] = useState(Number(item.price));

    const handleQuantity = (value) => {
        if(quantity + value > 0){
            setQuantity(quantity + value);
            
            if(value == -1){
                setMrp(mrp - Number(Number(item.mrp.split(",").join(""))));
                setPrice(price - Number(item.price));
            }
            else{
                setMrp(mrp + Number(item.mrp.split(",").join("")));
                setPrice(price + Number(item.price));
            }
        }
    }
    return (
        <div className={styles.prod}>
            <div className={styles.img}>
                <img src={item.image}  width="100%" height="100px"/>
            </div>
            <div className={styles.dis}>
                <p>{item.name}</p>
                <p>6 Months' Warranty, 100% Genuine</p>

                <div className={styles. deli}>
                    <div><VscCalendar/></div>
                    <div>
                        <h4>Delivery By</h4>
                        <p>Enter Your Pincode Above To Get These Details</p>
                    </div>

                </div>
            </div>
            <div className={styles.quantity}>
                <div className={styles.quan}>
                    <button onClick={ () => handleQuantity(-1)}>-</button>
                    <div>{quantity}</div>
                    <button onClick={ () => handleQuantity(1)}>+</button>
                </div>
                <div className={styles.price}>
                    <p>{mrp}</p>
                    <p>{price}</p>
                </div>
            </div>
            <div className={styles.action}>
                <div onClick={() => deleteItem(item.id)}><RiDeleteBinLine className={styles.icon}/></div>
                <div onClick={() => moveItem(item)}><BsHeart className={styles.icon}/></div>
            </div>

        </div>
    )
}