import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = id => cart.some(item =>item.id === id);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)) {
            const newCart = cart.map(cartItem => {
                if(cartItem.id === item.id) {
                    return {...cartItem, quantity: cartItem.quantity + quantity}
                } else return cartItem;
            });
            setCart(newCart);
        } else {
            setCart(prev => [...prev, {...item, quantity}]);
        }
    };


    
    /* const itemEliminar = id => cart.find( item => item.id === id); 

    const removeItem = (item) => {
        if(itemEliminar(item.id)) {
            const indice = cart.indexOf(itemEliminar);
            cart.splice(indice, 1);
        }
    }; */

    /* const removeItem = (id) => {
        for(let i = 0; i < cart.length; i += 1) {
            if (cart[i].id === id) {
                cart.splice(i, 1)
                return
            }
        }
    } */

    let reduceCart = cart.reduce((acc, el) => acc += (el.precio * el.quantity), 0)

    return (
        <CartContext.Provider value={{cart, setCart, clearCart, addToCart, reduceCart }} >
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;
