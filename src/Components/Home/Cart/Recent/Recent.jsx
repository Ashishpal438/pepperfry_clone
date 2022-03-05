import { Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
const Recent = ({ recentCount, setRecentCount }) => {
  return (
    <div>
      {
        recentCount > 0 ?<>
        </> : <div className={styles.empty_cart}>
          <img className={styles.empty_cart_img} src="https://www.pepperfry.com/images/svg/empty-recently-view.svg" alt="" />
          <Typography variant='subtitle1'>Nothing To Display Here!
          </Typography>
          <button className={styles.continueButton}>Start Shopping</button>
        </div>
      }
    </div>
  )
}

export default Recent
