import React from "react";

export const ProductContext = React.createContext();

export const ProductContextProvider = ({children}) => {
    const [product , setProduct] = React.useState("");
    const [page, setPage] = React.useState("");

    return (
        <ProductContext.Provider value={{product, setProduct, page, setPage}}>
            {children}
        </ProductContext.Provider>
    )
}