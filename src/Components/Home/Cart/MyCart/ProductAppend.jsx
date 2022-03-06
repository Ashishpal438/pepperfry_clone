import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const ProductAppend = ({ product_img, product_name, product_Offerprice, product_price }) => {
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
                            <Typography>
                                <p style={{ border: "1px dashed black", width: "fit-content", fontStyle: "italic" }}>Use Coupon WOW To Avail Offer Price</p>
                            </Typography>
                             <div>
                                <Button>Move to Wishlist</Button><Button>Remove</Button>
                            </div>
                        </CardContent>
                    </Box>

                </Card>
            </div>
            <button className={styles.payment_Button}>Proceed To Pay Securely</button>
        </div>
    )
}

export default ProductAppend
