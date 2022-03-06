import React from "react";

export const ProductContext = React.createContext();

export const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = React.useState("");
    const [page, setPage] = React.useState("furniture");
    const [display, setDisplay] = React.useState("")
    const [cartCount, setCartCount] = React.useState(0);
    const [wishlistCount, setWishlistCount] = React.useState(0);
    const [recentCount, setRecentCount] = React.useState(0);
    const [loginModal, setLoginModal] = React.useState("signUp");
    const [logInopen, setLogInOpen] = React.useState(false);
    const handleLoginOpen = () => setLogInOpen(true);
    const [cart, setCart] = React.useState([]);
    const [wishlist, setWishlist] = React.useState([]);
    const [Auth, setAuth] = React.useState(false);
    const handleloginClose = () => {
        setLogInOpen(false)
        setLoginModal("signUp")
    };
    const disp_change = (val) => {
        setDisplay(val)
    }
    const login_change = (arg) => {
        setLoginModal(arg)
    }
    const authentication = (email, password) => {
        fetch(`https://pepperfry-backend1.herokuapp.com/users`)

            .then((r) => r.json())
            .then((d) => {
                for (var i = 0; i < d.length; i++) {
                    var obj = d[i]
                    console.log(obj.email)
                    if (obj.email === email && obj.password === password) {
                        setAuth(true)
                        return
                    }
                }
                return alert("invalid Credential")
            })
            .catch((err) => { console.log(err) })


    }


    return (
        <ProductContext.Provider value={{ product, setProduct, page, setPage, display, setDisplay, cartCount, setCartCount, wishlistCount, setWishlistCount, recentCount, setRecentCount, disp_change, loginModal, setLoginModal, login_change, logInopen, setLogInOpen, handleLoginOpen, handleloginClose, cart, wishlist, setCart, setWishlist, authentication }}>
            {children}
        </ProductContext.Provider>
    )
}