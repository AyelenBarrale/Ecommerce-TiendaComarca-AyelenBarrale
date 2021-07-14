import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [productsInCart, setProductsInCart] = useState(0);

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

    const removeItem = (itemId) => {
        const updateCart = cart.filter(cartItem => cartItem.id !== itemId);
        setCart(updateCart);
    }

    const realStock = item => {
        const foundItem = cart.find(el => el.id === item.id);
        return foundItem ? item.stock - foundItem.quantity : item.stock;
    }

    let reduceCart = cart.reduce((acc, el) => acc += (el.precio * el.quantity), 0)

    let reduceQuantity = cart.reduce((acc, el) => acc += (el.quantity), 0)

    useEffect(() => {
        const localCart = localStorage.getItem("cart");
        if(!localCart) localStorage.setItem("cart", JSON.stringify([]));
        else setCart(JSON.parse(localCart));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        const inCart = cart.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        setProductsInCart(inCart);
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, productsInCart, setCart, clearCart, addToCart, reduceCart, removeItem, reduceQuantity, realStock }} >
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;
