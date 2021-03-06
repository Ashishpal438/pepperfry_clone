import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { ProductContext } from '../../../../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
const ProductAppend = () => {
    const navigate= useNavigate()
    const { cart,handleCartRemove,handleWishlist } = React.useContext(ProductContext);
    return (
        <div>

            {cart.map((data) => {
                return (
                    <div className={styles.cart_product_append}>
                        <Card sx={{ display: 'flex', width: '500px' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
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
                                        <Button onClick={()=>{
                                            handleWishlist(data)
                                            handleCartRemove(data.id)
                                        }}>Move to Wishlist</Button><Button onClick={() => handleCartRemove(data.id)}>Remove</Button>
                                    </div>
                                </CardContent>
                            </Box>

                        </Card>
                    </div>)
            })}
            <button className={styles.payment_Button} onClick={() => navigate("/checkout")}>Proceed To Pay Securely</button>
        </div>
    )
}

export default ProductAppend