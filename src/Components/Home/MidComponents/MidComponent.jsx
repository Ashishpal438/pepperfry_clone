import React, { useContext } from 'react'
import styles from '../home.module.css'
import { FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import { handleClick } from './MidSlider.js'

import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../../Context/ProductContext'

export const MidComponent = () => {
    let navigate = useNavigate();
    let {setProduct} = useContext(ProductContext);

   const showProduct = ( prod) => {
    setProduct(prod);
    navigate("/product");

   }

  return (
      <>
    <div className={styles.mainContainer}>
    
        <h1 className={styles.heading}>Shop By Room</h1>

        <div className={styles.cardContainer}>
            <div onClick={() => showProduct("furniture")}>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1__2x_17022022.jpg" alt="Living Room" />
                <p>Living Room</p>
            </div>

            <div onClick={() => showProduct("decor")}>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2__2x_17022022.jpg" alt="Work From Home" />
                <p >Work From Home</p>
            </div>

            <div onClick={() => showProduct("mattress")}>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3__2x_17022022.jpg" alt="Bedroom" />
                <p>Bedroom</p>
            </div>

            <div onClick={() => showProduct("decore")}>
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


{/* slider */}

    <div className={styles.mainContainer}>

    <div className={styles.pocket}>
       <h1 className={styles.heading}>Your Pocket-Friendly Shoppe</h1>
       <div>
         <FaAngleLeft  style={{fontSize:`40px`, cursor:`pointer`}} onClick={() => handleClick(0)}/>
         <FaAngleRight style={{fontSize:`40px`, cursor:`pointer`}} onClick={() => handleClick(1)} />
       </div>


    </div>
     <div className={styles.cardContainerSlider}>
        <div className={styles.slider} id='firstimg' >
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
         <div className={styles.slider} onClick={() => showProduct("furnishing")}>
             <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_6_2x_17022022.jpg" alt="" />
             <p className={styles.coffee}>Portable Tables &#60; 8K </p>
            <p className={styles.grey}>88+ Optios</p>
         </div>  
         <div className={styles.slider}>
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_17022022.jpg" alt="Dining Sets" />
            <p className={styles.coffee}>4 Seater Dining Sets &#60; 6K </p>
            <p className={styles.grey}>226+ Optios</p>
         </div> 
         <div className={styles.slider}>
             <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_6_2x_17022022.jpg" alt="" />
             <p className={styles.coffee}>Portable Tables &#60; 8K </p>
            <p className={styles.grey}>88+ Optios</p>
         </div>  
         <div className={styles.slider}>
             <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_2_2x_17022022.jpg" alt="" />
             <p className={styles.coffee}>Office Chairs &#60; 8K </p>
            <p className={styles.grey}>343+ Optios</p>
         </div>  
         <div className={styles.slider}>
             <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_5_2x_17022022.jpg" alt="" />
             <p className={styles.coffee}>Beside Tables &#60; 6K </p>
            <p className={styles.grey}>93+ Optios</p>
         </div>  
     </div>

    </div>

{/* blue background (view all styles) */}

    <div className={styles.viewAllContainer}>
        <div className={styles.viewAll}>
            <div className={styles.text}>
                <h1>We've Got Your Style</h1>
                <p className={styles.simplep }>Your home is a reflection of you. Nail your aesthetic with products our stylists love and recommend</p>
                <p className={styles.orange}>View all Styles</p>
            </div>

            <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_1_2x_04032022.jpg" alt="img" />
                <p className={styles.coffee}>Modern </p>
                <p className={styles.grey}>From Meets Function</p>
            </div>

            <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_2_2x_04032022.jpg" alt="img" />
                <p className={styles.coffee}>Traditional</p>
                <p className={styles.grey}>Old World Charm</p>
            </div>

            <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Style_Block_Web_3_2x_04032022.jpg" alt="img" />
                <p className={styles.coffee}>Industrial</p>
                <p className={styles.grey}>Perfect Imperfections</p>
            </div>


        </div>
    </div>






    {/* slider 2 */}

    
    <div className={styles.mainContainer}>

    <div className={styles.pocket}>
       <h1 className={styles.heading}>Ready For The New ?</h1>
       <div>
         <FaAngleLeft  style={{fontSize:`40px`, cursor:`pointer`}} onClick={() => handleClick(2)}/>
         <FaAngleRight style={{fontSize:`40px`, cursor:`pointer`}} onClick={() => handleClick(3)} />
       </div>


    </div>
     <div className={styles.cardContainerSlider2}>
        <div className={styles.slider} id='secondimg' >
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_1_2x_04032022.jpg" alt="Dining Sets" />
            <p className={styles.coffee}>Scandinavian Collection </p>
            <p className={styles.grey}>Home Hygge Home</p>
         </div> 
         <div className={styles.slider}>
             <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_2_2x_04032022.jpg" alt="img" />
             <p className={styles.coffee}>Sofa Chairs </p>
            <p className={styles.grey}>Single Seater Sofas</p>
         </div>  
         <div className={styles.slider}>
             <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_3_2x_04032022.jpg" alt="img" />
             <p className={styles.coffee}>Nineveh Collection </p>
            <p className={styles.grey}>Grandeur Of Glass</p>
         </div>  
         <div className={styles.slider}>
             <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_4_2x_04032022.jpg" alt="img" />
             <p className={styles.coffee}>Aebler Collection</p>
            <p className={styles.grey}>Very Plush</p>
         </div>  
         <div className={styles.slider}>
            <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_5_2x_04032022.jpg" alt="Dining Sets" />
            <p className={styles.coffee}>Yesh Collection </p>
            <p className={styles.grey}>Modern Latticework</p>
         </div> 
         <div className={styles.slider}>
             <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Collection_Block_WEB_6_2x_04032022.jpg" alt="img" />
             <p className={styles.coffee}>Cabinets & Sideboards </p>
            <p className={styles.grey}>Latest Styles Added</p>
         </div>   
     </div>

    </div>




    {/* slider 3 */}

    <div className={styles.mainContainer}>

<div className={styles.pocket}>
   <h1 className={styles.heading}>Home Décor You Can't Ignore</h1>
   <div>
     <FaAngleLeft  style={{fontSize:`40px`, cursor:`pointer`}} onClick={() => handleClick(4)}/>
     <FaAngleRight style={{fontSize:`40px`, cursor:`pointer`}} onClick={() => handleClick(5)} />
   </div>


</div>
 <div className={styles.cardContainerSlider}>
    <div className={styles.slider} id='thirdimg' >
        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_1_2x_17022022.jpg" alt='img' />
        <p className={styles.coffee}>Hanging Lights</p>
        <p className={styles.grey}>Instant Makeover</p>
     </div> 
     <div className={styles.slider}>
         <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_2_2x_17022022.jpg" alt="img" />
         <p className={styles.coffee}>Meta Wall Art</p>
        <p className={styles.grey}>A sleek Addition</p>
     </div>  
     <div className={styles.slider}>
         <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_3_2x_17022022.jpg" alt="img" />
         <p className={styles.coffee}>Pots & Planters</p>
        <p className={styles.grey}>Green is in</p>
     </div>  
     <div className={styles.slider}>
         <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_4_2x_17022022.jpg" alt="img" />
         <p className={styles.coffee}>Wall Shelves</p>
        <p className={styles.grey}>Flying Off The Shelves</p>
     </div>  
     <div className={styles.slider}>
        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_5_2x_17022022.jpg" alt="Dining Sets" />
        <p className={styles.coffee}>Mirrors</p>
        <p className={styles.grey}>New Styles Added</p>
     </div> 
     <div className={styles.slider}>
         <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_1_2x_17022022.jpg" alt="img" />
         <p className={styles.coffee}>Hanging Lights</p>
        <p className={styles.grey}>Instant Makeover</p>
     </div>  
     <div className={styles.slider}>
         <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_3_2x_17022022.jpg" alt="img" />
         <p className={styles.coffee}>Pots and Planters </p>
        <p className={styles.grey}>Green is in</p>
     </div>  
     <div className={styles.slider}>
         <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Decor_Block_WEB_6_2x_17022022.jpg" alt="img" />
         <p className={styles.coffee}>Door Mats</p>
        <p className={styles.grey}>Starting Rs. 175</p>
     </div>  
 </div>

</div>





{/* Top Brnads */}

   <div className={styles.topBrandsContainer}>
      <div className={styles.topBrands}>
          <h1>Top Brands To Choose From</h1>
          <div  className={styles.topBrandsimg}>
              <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_1_2x_04032022.jpg" alt="img" />
              <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_2_2x_04032022.jpg" alt="img" />
              <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_3_2x_04032022.jpg" alt="img" />
              <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_4_2x_04032022.jpg" alt="img" />
              <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_5_2x_04032022.jpg" alt="img" />
              <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Brands_WEB_6_2x_04032022.jpg" alt="img" />           
          </div>
      </div>

       {/* modular */}
      <div className={styles.modular}>
          <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Mattress_Block_Web_2X_04032022.jpg" alt="img" />

          <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Modular_Block_Web_2X_04032022.jpg" alt="img" />
      </div>
   </div>





   {/* More from the sore */}

   <div className={styles.moreFromStore}>
      <h1>More From The Store</h1>
      <div className={styles.store}>
          <div className={styles.furniture}>
              <h3>Furniture</h3>
              <ul>
                  <li>Sofas & Furniture</li>
                  <li>Seating</li>
                  <li>Chairs</li>
                  <li>Beds</li>
                  <li>Cabinetry</li>
                  <li>Tables</li>
                  <li>Dining</li>
                  <li>Kids & Teens</li>
                  <li>Home Office</li>
                  <li>Sofa Chairs</li>
                  <li>Entertainment Units</li>
                  <li>Outdoor</li>
                  <li>Bar Furniture</li>
                  <li>Furniture & Home Services</li>
              </ul>
          </div>


          <div className={styles.furniture}>    
             <div className={styles.upperDiv}>
             <h3>Sofa & Recliners</h3>
              <ul>
                  <li>By Size</li>
                  <li>By Type</li>
                  <li>By Style</li>
                  <li>By Material</li>
                  <li>Sofa Chairs</li>
              </ul>
             </div>

              <h3>Decor</h3>
              <ul>
                  <li>Wall Shelves & Cabinets</li>
                  <li>Clocks</li>
                  <li>Wall Art</li>
                  <li>Table Decor</li>
                  <li>Spiritual</li>
                  <li>Home Garden</li>
                  <li>Tableware</li>
                  <li>Kids Decor</li>
                  <li>Mirrors</li>
                  <li>Photo Frames</li>
                  <li>Accent Furniture</li>
              </ul>
          </div>


          <div className={styles.furniture}>
          <div className={styles.upperDiv}>
                <h3>Beds</h3>
                 <ul>
                     <li>By Size</li> 
                     <li>By Storage</li> 
                     <li>Kids & Teens</li> 
                     <li>By Material</li> 
                     <li>By Style</li> 
                     <li>Mattresses</li> 
                 </ul>
             </div>
                 <h3>Furnishings</h3>
                 <ul>
                     <li>Bed Linen</li>
                     <li>Blankets & Comforters</li>
                     <li>Carpets</li>
                     <li>Curtains</li>
                     <li>Cushion & Covers</li>
                     <li>Bath Linen</li>
                     <li>Kids Furnishings</li>
                     <li>Home Services</li>
                     <li>Flooring</li>
                     <li>Table Linen</li>
                     <li>Essentials</li>
                 </ul>
          </div>



           <div className={styles.furniture}>
              <div className={styles.upperDiv}>
               <h3>Cabinetry</h3>
               <ul>
                   <li>Wardrobes</li>
                   <li>Shoe Racks</li>
                   <li>Storage</li>
                   <li>Entertainment Units</li>
                   <li>Bar</li>
                   <li>Kids Storage</li>
               </ul>
                </div>

               <h3>Lighting</h3>
               <ul>
                   <li>Floor Lamps</li>
                   <li>Chandeliers</li>
                   <li>Wall Lighting</li>
                   <li>Smart Lights</li>
                   <li>Festive Lights</li>
                   <li>Lampshades</li>
                   <li>Ceiling Lights</li>
                   <li>LED Lights</li>
                   <li>Outdoor Lights</li>
                   <li>Table Lamps</li>
                   <li>Kids Lighting</li>
               </ul>
           </div>



           <div className={styles.furniture}>
              <h3>Applainces</h3>
              <ul>
                  <li>Mixers</li>
                  <li>Breakfast Applainces</li>
                  <li>Chimneys</li>
                  <li>Built-in-Appliances</li>
                  <li>Health & Cooling Appliances</li>
                  <li>Cleaning</li>
                  <li>Refrigerators</li>
                  <li>OTGs</li>
                  <li>Food Makers</li>
                  <li>Cooktops</li>
                  <li>Bar Applainces</li>
                  <li>Purifiers</li>
                  <li>Laundry</li>
                  <li>Televisions</li>
              </ul>
           </div>


      </div>
   </div>



   {/* Happy Customers Happy Us */}

   <div>
        <div className={styles.happyCustomers}>
            <h1>Happy Customers, Happy Us</h1>

          <div className={styles.happyContainers}>
            <div className={styles.box}>
               <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg" alt="img" />
               <p>Bought these two grey puffy stools from pepperfry. Found them to be surprisingly strong! Blends...</p>

               <h3>Suman Senapatia</h3>
               <h4>Visakhapatnam</h4>
            </div>

            <div className={styles.box}>
               <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_8.jpg" alt="img" />
               <p>I purchased Candy Study Chair in Pink Colour by Alex Daisy from pepperfry looks awesome and My...</p>

               <h3>Satya Madhana</h3>
               <h4>Secunderabad</h4>
            </div>

            <div className={styles.box}>
               <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg" alt="img" />
               <p>Purchased an ergonomic chair, I thought it would not be fitting for me but once it got delivered, got i...</p>

               <h3>Babu Kattubadi</h3>
               <h4>Hyderabad</h4>
            </div>

         </div> 

        </div>    
   </div>


   {/* Need Help Buying */}

    <div className={styles.needHelpContainer}>
        <div className={styles.needHelp}>
        <h1>Need Help Buying?</h1>
        <h3>View all</h3>
        </div>

        <div className={styles.needHelpFlex}>
            <div>
            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg" alt="img" />
            <h3>Here's How To Choose The Right Sofa</h3>
            </div>

           <div>
           <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg" alt="img" />
            <h3>How To Buy A Perfect Bed For Your Room</h3>
           </div>
           
           <div>
           <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg" alt="img" />
            <h3>Your Guide To Buy The Perfect Mattresses</h3>
           </div>
           
           <div>
           <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg" alt="img" />
            <h3>Everything About Cabinets And...</h3>
           </div>
          
          <div>
          <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg" alt="img" />
            <h3>What To Look For While Buying A Chair</h3>
          </div>

          <div>
            <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg" alt="img" />
         </div>


        </div>
    </div>

    </>
  )
}
