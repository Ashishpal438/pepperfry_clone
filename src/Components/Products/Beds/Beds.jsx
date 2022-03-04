import React, { useEffect, useState } from 'react'
import styles from './beds.module.css'
import { FaRupeeSign } from 'react-icons/fa'

export const Beds = () => {
    const [beds, setBeds] = useState([])

    useEffect(() => {
        getBeds()
    }, [])

    const getBeds = () => {
        fetch('https://pepperfry-backend1.herokuapp.com/beds')
        .then(res => res.json())
        .then(data  => setBeds(data))
    }

  return (
    <div className={styles.bedContainer}>
            {
                beds.map(beds => {
                        return (
                            <div key={beds.id}>
                                <img src={beds.image} alt=""/>
                                <p className={styles.name}> {beds.name} </p>
                                <p className={styles.brand}> {beds.brand} </p>
                                <p className={styles.price}> 
                                   <FaRupeeSign style={{marginTop:`10px`, fontSize:`18px`}}/> {beds.price} 
                                    <span className={styles.mrp}>
                                      <FaRupeeSign style={{marginTop:`10px`, fontSize:`14px`, marginLeft:`15px`}}/>{beds.mrp}
                                   </span>
                                </p>

                                <p className={styles.discount}>{beds.discount}</p>
                                {
                                    beds.cashback ? <p className={styles.cashback}>Earn Cashback <FaRupeeSign style={{marginTop:`10px`, fontSize:`12px`}}/> <span> <b>{beds.cashback} </b> </span></p> : null
                                }
                                <p className={styles.ship}> Ships in <b>{beds.ship}</b></p>
                            </div>)
                })
            }                       
    </div>
  )
}
