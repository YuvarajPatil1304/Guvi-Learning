import React, { createContext, useState } from "react";
export const CartContext = createContext({
    cartItems: [],
    updateCart: () => {},
})

export default function CartContextProvider({ children }) {
    const[cart,setCart] = useState();
    const cartContextValue = {
        cartItems: cart,
        updateCart: setCart,
    }

    return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
}