import { Box, Card, CardContent, CardMedia, Icon, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { GiShoppingCart } from "react-icons/gi";
const WishlistProduct = ({ product_img, product_name, product_Offerprice, product_price }) => {
    const data = {
        "id": "1",
        "name": "Tito Entertainment Unit in Natural Colour and Slate Grey Finish",
        "image": "https://ii2.pepperfry.com/media/catalog/product/t/i/494x544/tito-entertainment-unit-in-in-slate-grey-colour---casacraft-by-pepperfry-tito-entertainment-unit-in--ox1dyl.jpg",
        "brand": "CasaCraft",
        "price": "24500",
        "mrp": "39,999",
        "discount": "39%",
        "cashback": "1800",
        "ship": "1 day"
    }
    return (
        <div>
            <div className={styles.cart_product_append}>
                <Card sx={{ display: 'flex', width: '500px'}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151}}
                        image={data.image}
                        alt=""
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0px' }}>
                        <CardContent sx={{ flex: '1 0 auto', padding: "0px", paddingLeft: "10px" }}>
                            <Typography>
                                {`${data.name} by ${data.brand}`}
                            </Typography>
                            <Typography>
                                <p>
                                    Retail Price: <span style={{ textDecoration: "line-through" }}><CurrencyRupeeIcon sx={{ fontSize: 15 }} />{data.mrp}</span>
                                </p>
                                <p>
                                    Offer Price:<span style={{ fontWeight: "600" }}><CurrencyRupeeIcon sx={{ fontSize: 15 }} />{data.price}</span>
                                </p>
                            </Typography>
                            
                                
                                <div className={styles.rdbtn}>
                                <IconButton  sx={{fontSize:"15px"}}>
                                <Icon>
                                    <GiShoppingCart />
                                </Icon>
                                <Link>
                                    Add to Cart
                                </Link>
                                </IconButton>
                                <IconButton sx={{fontSize:"15px"}}><Link>Remove</Link></IconButton>
                            </div>
                        </CardContent>
                    </Box>

                </Card>
            </div>
        </div>
    )
}

export default WishlistProduct
