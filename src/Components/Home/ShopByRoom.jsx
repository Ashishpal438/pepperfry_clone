import React from 'react'
import styles from './home.module.css'

export const ShopByRoom = () => {
  return (
      <>
    <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Shop By Room</h1>
        <div className={styles.cardContainer}>
            <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1__2x_17022022.jpg" alt="Living Room" />
                <p>Living Room</p>
            </div>

            <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2__2x_17022022.jpg" alt="Work From Home" />
                <p>Work From Home</p>
            </div>

            <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3__2x_17022022.jpg" alt="Bedroom" />
                <p>Bedroom</p>
            </div>

            <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_4__2x_17022022.jpg" alt="Kids Room" />
                <p>Kids Room</p>
            </div>
        </div>
    </div>

    <div className={styles.mainContainer}>
        <h1 className={styles.heading}>What's Everyone Eyeing?</h1>
        <div className={styles.cardContainer2}>
            <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_1_2x_17022022-new.jpg" alt="Queen Size Beds" />
            </div>
            <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_2_2x_17022022-new.jpg" alt="Clock" />
            </div>
            <div className={styles.grid}>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_17022022.jpg" alt="Study Tables" />
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_17022022-new.jpg" alt="Wardrobes" />
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_17022022.jpg" alt="Shoe Racks" />
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_6_2x_17022022.jpg" alt="Bed Sheets" />
                </div>
            </div>
        </div>
    </div>


    <div className={styles.mainContainer}>
    <h1 className={styles.heading}>Your Pocket-Friendly Shoppe</h1>
     <div className={styles.cardContainer}>
        <div className={styles.slider}>
            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_17022022-new.jpg" alt="Dining Sets" />
            <p className={styles.coffee}>Coffee Tables &#60; 6K </p>
            <p className={styles.grey}>226+ Optios</p>
         </div> 
         <div className={styles.slider}>
             <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_17022022.jpg" alt="" />
             <p className={styles.coffee}>Office Chairs &#60; 8K </p>
            <p className={styles.grey}>343+ Optios</p>
         </div>  
         <div className={styles.slider}>
             <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_5_2x_17022022.jpg" alt="" />
             <p className={styles.coffee}>Beside Tables &#60; 6K </p>
            <p className={styles.grey}>93+ Optios</p>
         </div>  
         <div className={styles.slider}>
             <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_6_2x_17022022.jpg" alt="" />
             <p className={styles.coffee}>Portable Tables &#60; 8K </p>
            <p className={styles.grey}>88+ Optios</p>
         </div>  
     </div>
    </div>
    </>
  )
}
