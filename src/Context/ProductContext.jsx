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
    const [opencart, setOpencart] = React.useState(false);

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
    const handleOpencart = (comp) => {
        setOpencart(true)
        disp_change(comp)
    };
    const handleClosecart = () => setOpencart(false);

    const authentication = (email, password) => {
        fetch(`https://pepperfry-backend1.herokuapp.com/users`)

            .then((r) => r.json())
            .then((d) => {
                for (var i = 0; i < d.length; i++) {
                    var obj = d[i]
                    console.log("obj email", obj.email, "email enterd", email)
                    if (obj.email === email) {
                        setAuth(true)
                        setLogInOpen(false);
                        alert("Login Successful")
                        setAuth(true)
                        return
                    }
                }
                return alert("invalid Credential")
            })
            .catch((err) => { console.log(err) })


    }
    const handleWishlistRemove = (id) => {
        fetch(`https://pepperfry-backend1.herokuapp.com/wishlist/${id}`, { method: 'DELETE' })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const handleCartRemove = (id) => {
        fetch(`https://pepperfry-backend1.herokuapp.com/cart/${id}`, { method: 'DELETE' })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const handleCart = (prod) => {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
        }

        fetch("https://pepperfry-backend1.herokuapp.com/cart", config)
            .then(res => res.json())
            .then(res => {
                console.log("added to cart:", res)
            })
            .catch(err => console.log(err));
    }

    const handleWishlist = (prod) => {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
        }

        fetch("https://pepperfry-backend1.herokuapp.com/wishlist", config)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }




    return (
        <ProductContext.Provider value={{
            product,
            setProduct,
            page,
            setPage,
            display,
            setDisplay,
            cartCount,
            setCartCount,
            wishlistCount,
            setWishlistCount,
            recentCount,
            setRecentCount,
            disp_change,
            loginModal,
            setLoginModal,
            login_change,
            logInopen,
            setLogInOpen,
            handleLoginOpen,
            handleloginClose,
            cart, wishlist,
            setCart,
            setWishlist,
            authentication,
            opencart,
            setOpencart,
            handleOpencart,
            handleClosecart,
            handleCart,
            handleWishlistRemove,
            handleWishlist,
            handleCartRemove,
            Auth
        }}>
            {children}
        </ProductContext.Provider>
    )
}