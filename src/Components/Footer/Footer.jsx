import React from 'react'
import styles from './footer.module.css'
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
export const Footer = () => {
  const linkColor = blueGrey[200];
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <div>
          <Typography variant="subtitle1">
            Useful Links
          </Typography>
          <div className={styles.vertical}>
            <Link to='/' color={linkColor} underline="none">
              {'About Us'}
            </Link>

            <Link to='/' color={linkColor} underline="none">
              {'Our Blog'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'Careers'}
            </Link>

            <Link to='/' color={linkColor} underline="none">
              {'Corporate Governance'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'Pepperfry in the News'}
            </Link>

            <Link to='/' color={linkColor} underline="none">
              {'Find A Studio'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'Gift Cards'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'Brands'}
            </Link>

            <Link to='/' color={linkColor} underline="none">
              {'Customer Services'}
            </Link>
          </div>
        </div>
        <div>
          <Typography variant="subtitle1">
            Partners
          </Typography>
          <div className={styles.vertical}>

            <Link to='/' color={linkColor} underline="none">
              {'Sell With Us'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'BeCome a Franchise'}
            </Link>

            <Link to='/' color={linkColor} underline="none">
              {'Design For Us'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'Pepperfry Market Policies'}
            </Link>

            <Link to='/' color={linkColor} underline="none">
              {'Login to Your  Merchant Dashboard'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'Important: GST and You'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'Corporates Enquiries'}
            </Link>

          </div>
        </div>
        <div>
          <Typography variant="subtitle1">
            Need Help?
          </Typography>
          <div className={styles.vertical}>

            <Link to='/' color={linkColor} underline="none">
              {'Contact Us'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'Returns and Refund'}
            </Link>

            <Link to='/' color={linkColor} underline="none">
              {'Track Your orders'}
            </Link>
            <Link to='/' color={linkColor} underline="none">
              {'FAQs'}
            </Link>

            <Link to='/' color={linkColor} underline="none">
              {'Buy On Phone'}
            </Link>


          </div>
        </div>
        <div>
          <Typography variant="h4">
            Download App
          </Typography>
          <div className={styles.download}>
            <img src="https://ii1.pepperfry.com/images/web21-footer-apple-appstore-logo.png" alt="" srcset="" onClick={() => { }} />
            <br />
            <img src="https://ii1.pepperfry.com/images/web21-footer-google-playstore-logo.png" alt="" srcset="" onClick={() => { }} />
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div>
          <Typography variant="subtitle1">
            Popular Categories
          </Typography>
          <div className={styles.menu}>
            <Link to='/' color={linkColor} underline="none">
              {'Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves, TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets, Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room Furniture, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas, Sofa Set, Trundle Bed'}
            </Link>
          </div>
        </div>
        <div>
          <Typography variant="subtitle1">
            Popular Brands
          </Typography>
          <div className={styles.menu}>
            <Link to='/' color={linkColor} underline="none">
              {'Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana, Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian, Star India, Adiko Systems, Crystal Furnitech, Springtek, Story@Home, Parin, Furnitech, Trevi Furniture, Peachtree, Durfi, Muebles Casa, Duroflex'}
            </Link>
          </div>
        </div>
        <div>
          <Typography variant="subtitle1">
            Cities we deliver to
          </Typography>
          <div className={styles.menu}>
            <Link to='/' color={linkColor} underline="none">
              {'Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad and many more'}
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.third}>
        <div>
          <Typography variant="subtitle1">
            We accept
          </Typography>
          <div className={styles.payment}>
            <img src="https://ii1.pepperfry.com/images/web21-footer-visacard-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-mastercard-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-maestrocard-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-amexcard-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-rupaycard-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-dinnerscard-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-wallet-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-internet-banking-logo.png" alt="" srcset="" />
          </div>
        </div>
        <div>
          <Typography variant="subtitle1">
            Like what you see? You'll like us even more here
          </Typography>
          <div className={styles.social}>
            <img src="https://ii1.pepperfry.com/images/web21-footer-facebook-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-twitter-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-youtube-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-instagram-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-linkedin-logo.png" alt="" srcset="" />
            <img src="https://ii1.pepperfry.com/images/web21-footer-pinterest-logo.png" alt="" srcset=""/>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.fourth}>
        <div className={styles.horizontal}>
          <Link to='/' color={linkColor} underline="none">
            {'Buy in Bulk'}
          </Link>

          <Link to='/' color={linkColor} underline="none">
            {'Write A Testimonial'}
          </Link>
        </div>
        <div className={styles.horizontal}>
          <Link to='/' color={linkColor} underline="none">
            {'Whitehat'}
          </Link>

          <Link to='/' color={linkColor} underline="none">
            {'Site Map'}
          </Link>
          <Link to='/' color={linkColor} underline="none">
            {'Terms Of Use'}
          </Link>

          <Link to='/' color={linkColor} underline="none">
            {'Privacy Policy'}
          </Link>
          <Link to='/' color={linkColor} underline="none">
            {'Your Data & Security'}
          </Link>

          <Link to='/' color={linkColor} underline="none">
            {'Grivence Redressal'}
          </Link>
        </div>
      </div>
    </div>
  )
}
