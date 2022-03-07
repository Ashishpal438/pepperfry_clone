import { Box, Card, CardContent, CardMedia, Icon, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { GiShoppingCart } from "react-icons/gi";
import { ProductContext } from '../../../../Context/ProductContext';
const WishlistProduct = () => {
    const {wishlist,handleCart,handleWishlistRemove}=React.useContext(ProductContext);

    return (
        <div>
            {
                wishlist.map((data)=>{
                    return <div className={styles.cart_product_append}>
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


                                    <div className={styles.rdbtn}>
                                        <IconButton sx={{ fontSize: "15px" }}>
                                            <Icon>
                                                <GiShoppingCart />
                                            </Icon>
                                            <Link onClick={()=>{
                                                handleCart(data)
                                                handleWishlistRemove(data.id)}}>
                                                Add to Cart
                                            </Link>
                                        </IconButton>
                                        <IconButton sx={{ fontSize: "15px" }}><Link  onClick={()=>handleWishlistRemove(data.id)}>Remove</Link></IconButton>
                                    </div>
                                </CardContent>
                            </Box>

                        </Card>
                    </div>
                    
                })
            }
            
        </div>
    )
}

export default WishlistProduct